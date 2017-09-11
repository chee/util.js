#!/usr/bin/env node
module.exports = string => [].map.call(string, character => {
  const code = character.charCodeAt(0)
  return code > 64 && code < 123
    ? String.fromCharCode(code + 65248)
    : character
}).join('')

if (require.main === module) {
  const words = process.argv.slice(2).join(' ')
  console.log(module.exports(words))
}
