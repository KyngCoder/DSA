const countRepeat = (string) => {
    let count = {}
    string = string.split('')
    for (let i=0; i<string.length; i++){
        let letter = string[i]
        count[letter]? count[letter] +=1 : count[letter] = 1
    }
    return count
}

console.log(countRepeat('i love everything about shy-ann'))