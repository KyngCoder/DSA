const reverseNum = (num) => {
    return +num.toString().split('').reverse().join('')
}
console.log(reverseNum(220))