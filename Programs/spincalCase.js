const spinalCase = (string) => {
    return string.split(' ').join('-').toLowerCase()
}
console.log(spinalCase('Hello Mary, how are you'))
