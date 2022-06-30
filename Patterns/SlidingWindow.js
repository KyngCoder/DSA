/*
write a maxSubArraySum function which accepts a array and a number
the function should calculate the highest sum of consecutive number
 */

const maxSubArraySum = (array,num) => {
    let maxSum = 0
    let tempSum = 0
    if(array.length <num) return null
    for(let i=0; i<num; i++){
        maxSum = maxSum + array[i]
    }
    tempSum = maxSum
    for(let i=num; i<array.length; i++){
        tempSum = tempSum + array[i] - array[i - num]
    }
    return tempSum
}
console.log(maxSubArraySum([1,2,3,4,5,6,7],3))