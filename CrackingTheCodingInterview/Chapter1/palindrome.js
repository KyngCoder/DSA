const palindrone = (string) => {
    return string.split('').reverse().join('')=== string
}
console.log(palindrone('racecar'))