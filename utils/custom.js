const reverseText = (str) => {
  return str.split('').reverse().join('')
}

const palindrome = (str) => {
  return str.split('').reverse().join('') === str
}

module.exports = { reverseText, palindrome }
