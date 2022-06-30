
const minArray = (array) => {
    let count = 100000000
    for(let i=0; i<array.length; i++){
        if(array[i]<count){
            count = array[i]
        }
    }
    return count
}
console.log(minArray([5,1,2,4,5,7]))