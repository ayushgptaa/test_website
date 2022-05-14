/* eslint-disable import/prefer-default-export */

// takes a number, returns a comma separated output 40000 -> 40,000
export const convertToDecimalSeparated = (number) => {
  return number.toString().replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
