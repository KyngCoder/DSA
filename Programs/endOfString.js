const endOfString = (string,target) => {
//   return string[string.length-1] === target
    return string.endsWith(target)
}
console.log(endOfString('johnny','a'))