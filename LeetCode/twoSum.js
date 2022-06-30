//given an array of integer and a target. return the indices of two num that add up to the target

// const twoSum = (array,target) => {
//     for(let i=0; i<array.length; i++){
//         for(let j=1; j<array.length; j++){
//             if(array[i] + array[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return -1
// }
// console.log(twoSum([2,6,15,7],9))

//more efficient
// const twoSum = (array,target) => {
//     array = array.sort((a,b)=>(a-b))
//     let start = 0
//     let end = array.length-1
//     while(start < end){
//         let sum = array[start] + array[end]
//         if(sum === target){
//             return [start,end]
//         }else if(sum > target){
//             end--
//         }else{
//             start++
//         }
// }
// return -1
// }
// console.log(twoSum([11,7,2,15],9))


const twoSum = (array, target) => {
    const hash = {}
    for(let i=0; i<array.length; i++){
        let val = array[i]
        hash[val] = i
    }
    for(let i=0; i<array.length; i++){
        let potKey = target - array[i]
        if(hash[potKey] && hash[potKey] !==i){
            return [i,hash[potKey]]
        }
    }
}
console.log(twoSum([7,11,2,9],9))