const consecutive = (array) => {
    for(let i=0; i<array.length; i++){
        const current = array[i]
        const next = array[i+1]
        if(current + 1 !== next){
            return next
        }
    }
    return null
}

console.log(consecutive([1,2,3,4,5]))