
//get digit helper method

const getDigit = (num,place) => {
   return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10
}
// console.log(getDigit(10,0))


const digitCount = (num) => {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1

}
// console.log(digitCount(1))

const getMostDigit = (array) => {
    let maxDigits = 0
    for(let i=0; i<array.length; i++){
        maxDigits = Math.max(maxDigits,digitCount(array[i]))
    }
    return maxDigits
}
// console.log(getMostDigit([1,2,4,6,2,10,20,2552,40,25]))

const radixSort = (nums) => {
    maxDigits = getMostDigit(nums)
    for(let i=0; i<maxDigits; i++){
        let digitBucket = Array.from({length:10}, () => [])
        for(let j=0; j<nums.length; j++){
            let digits = getDigit(nums[j],i)
            console.log(digits)
            digitBucket[digits].push(nums[j])
        }
        console.log(digitBucket)
        nums = [].concat(...digitBucket)   
    }
    return nums
}

console.log(radixSort([1,2,3,55,77,890,240,30750,]))
