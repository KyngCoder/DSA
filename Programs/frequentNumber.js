const repeatNumber = (array) => {
    let numCounter = {repeat:0}
    let mostFrequentNumber = 0
    for(let i=0; i<array.length; i++){
        let num = array[i]
        numCounter[num]? numCounter[num] +=1 : numCounter[num] = 1
        if(numCounter[num] > numCounter['repeat']){
            mostFrequentNumber = `${array[i]}:${numCounter[num]}`
        }
    }
    return mostFrequentNumber
}

console.log(repeatNumber([1,22,22,50,7,6,55,7,7,2,3,7]))