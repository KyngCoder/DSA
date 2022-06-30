

const arraySum = (array,target) => {
    target = 0
    sum = 0
    for (let i=0; i<array.length; i++){
        target = Math.max(target,array[i])
        sum = sum + array[i]
    }
    if(sum - target === target){
        return true
    }
}

console.log(arraySum([1,2,4,8]))