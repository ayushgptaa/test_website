/* eslint-disable import/prefer-default-export */

// takes a number, returns a comma separated output 40000 -> 40,000, round means position to which round to. can be optional
export const convertToDecimalSeparated = (number, round) => {
  const number1 = parseFloat(number)
  const number2 = round !== undefined ? number1.toFixed(round) : number1

  return Number(number2).toLocaleString('en')
}

// converts number to string representation with K and M.
// toFixed(d) returns a string that has exactly 'd' digits
// after the decimal place, rounding if necessary.
export const convertNumberToStringRepresentation = (num) => {
  if (num > 999 && num < 1000000) {
    return `${(num / 1000).toFixed(1)}K` // convert to K for number from > 1000 < 1 million
  }
  if (num > 1000000) {
    return `${(num / 1000000).toFixed(1)}M` // convert to M for number from > 1 million
  }
  if (num < 900) {
    return num // if value < 1000, nothing to do
  }

  return ''
}

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const getTextDisplayWidth = (text, font) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  context.font = font || getComputedStyle(document.body).font

  return context.measureText(text).width
}

export const padToIncreaseWidth = (text, width, padder) => {
  let output = text
  let currentWidth = getTextDisplayWidth(output)

  while (currentWidth < width) {
    output += padder ?? ' '
    currentWidth = getTextDisplayWidth(output)
  }

  output += '\t\t\t\t\t\t\t\t\t'

  return output
}

export const toLowerCaseRemoveSpaces = (string) => {
  return string.toLowerCase().split(' ').join('')
}
