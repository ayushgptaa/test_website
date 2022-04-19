FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

COPY ./docker /etc/nginx/conf.d

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
