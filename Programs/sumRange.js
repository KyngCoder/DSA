const sumRange = (array) => {
    let sum = 0
    let start = array[0]
    let end = array[1]
    if(start > end){
        for(let i =end; i<=start; i++){
            sum = sum + i
        }
    }else{
    for(let i=start; i<=end; i++){
        sum = sum + i
    }
}
    return sum
}

console.log(sumRange([4,1]))