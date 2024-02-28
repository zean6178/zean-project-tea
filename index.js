const count = require('text-count');

function Zean() {
  const text = "Z E A N"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Zean
