const checkPalindrome = (str) => {
    let tempString = str.match(/[a-z0-9]+/ig).join('').toLowerCase()
    let secondString = tempString.split('').reverse().join('')
    return tempString === secondString
}

console.log(checkPalindrome('racar'))