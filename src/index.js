module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map(brackets => brackets.join(''))

  while (config.some(bracket => str.includes(bracket))) {
    for (let bracket of config) {
      str = str.replace(bracket, '')
    }
  }

  
  return str.length === 0
}
