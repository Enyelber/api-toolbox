const reverseText = (str) => {
  return str.split('').reverse().join('')
}

const palindrome = (str) => {
  //removing whitespace
  const newStr = str.replace(/[\W_]/g, '').toLowerCase()

  //Creates the constant strReverse, in which the reversed string is stored
  const strReversed = reverseText(newStr)

  return newStr === strReversed ? true : false
}

module.exports = { reverseText, palindrome }
