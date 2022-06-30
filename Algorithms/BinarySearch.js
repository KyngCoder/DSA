

// function binarySearch(array,target){
//     let start = 0
//     let end = array.length-1                   

//     while(start <= end){
//         let middle = Math.floor((start + end)/2)
//         if(array[middle] === target){
//             return `target found ${target}`
//         }else if(array[middle] > target){
//             //then search to the left
//             end = middle -1 
//         }else{
//             //then search right
//             start = middle + 1
//         }
//     }
//     return `not found -1`
// }

// console.log(binarySearch([1,2,3,4,5],7))


const binarySearch = (sortedArray,target) => {
    let left = 0
    let right = sortedArray.length-1
    while(left < right){
        let middle = Math.floor((left + right)/2)
        if(sortedArray[middle] === target) return middle
        if(sortedArray[middle] < target){
            left = sortedArray[middle + 1]
        }else{
            right = sortedArray[middle-1]
        }

    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7],6))