/* eslint-disable import/prefer-default-export */

// takes a number, returns a comma separated output 40000 -> 40,000, round means position to which round to. can be optional
export const convertToDecimalSeparated = (number, round) => {
  const number1 = parseFloat(number)
  const number2 = round !== undefined ? number1.toFixed(round) : number1

  return Number(number2).toLocaleString('en')
}
