
// const destroyTarget = (array,...targets)=>{
//     let newArray = []
//     for(let i=0; i<array.length; i++){
//        if(!targets.includes(array[i])){
//            newArray.push(array[i])
//        }
//     }
//     return newArray
// }

const destroyTarget = (Array,...targets) => {
    return Array.filter(element => targets.indexOf(element) === -1)
}
console.log(destroyTarget([2,3,6,6],2,3,4))