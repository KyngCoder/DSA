/*
given a sorted array of integer, create a function called search that
returns the index of the target being searched for and -1 if it don't exist
 */

const search = (array,target) => {
    let start = 0
    let end = array.length-1
    for(let i=0; i<array.length;i++){
        let middle = (Math.floor(start+end)/2)
        if(array[middle] === target) return middle
        if(array[middle] > target) {
            end = middle -1
        }else{
            start = middle + 1
        }
    }
    return -1
}
console.log(search([1,2,3,4,5,6,7],70))