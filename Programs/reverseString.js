const reverseString = (string) => {
    string = string.split('')
    string = string.reverse()
    return string.join('')
}

console.log(reverseString('hello'))