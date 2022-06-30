const stringCompression = (string) => {
    let repeats = {}
    for(let i=0; i<string.length; i++){
        repeats[string[i]]? repeats[string[i]] +=1 : repeats[string[i]] = 1
    }
return repeats
}

console.log(stringCompression('aabcccccaaa'))