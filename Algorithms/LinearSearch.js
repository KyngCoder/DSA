
//linear search in javascript

// function linearSearch(array,target){
//     for (let i=0; i<array.length; i++){
//         if (array[i] === target) return `found ${target}`
//     }
//     return `not found ${target}`
// }

// console.log(linearSearch([1,2,3,4,5,6,7,],9))

const linearSearch = (array,target) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === target) return i
    }
    return -1

}

console.log(linearSearch([1,2,4,5,6,7,8,8,0,4],49))