const findAndReplace = (sentence,word1,word2) => {
    return sentence.replace(word1,word2[0].toUpperCase()+word2.substr(1,))
}
console.log(findAndReplace('i was sleeping on the couch','sleeping','sitting'))