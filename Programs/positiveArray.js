// let newArray = []
// const positiveArray = (array) =>{
//     for(let i=0; i<array.length;i++){
//         if(array[i]%2===0){
//             newArray.push(array[i])
//         }
//     }
// }

// positiveArray([1,2,3,4,5,6,7,8])
// console.log(newArray)

function nonNegative(array){
    return array.filter(num=>num%2===0)
}
console.log(nonNegative([1,2,3,4,5,6,7,8]))