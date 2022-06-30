
const largestRepeat = (string) => {
    string = string.split('')
    let max = 0
    let frequency = {max:0}
    for(let i=0; i<string.length; i++){
        let letter = string[i]
        frequency[letter]? frequency[letter] +=1 : frequency[letter] = 1
        frequency[' '] = 0
        if(frequency[letter] > frequency['max']) {
            max = `${string[i]}:${frequency[letter]}`

        }
    }
    return max

}

console.log(largestRepeat('i lovee jamie'))