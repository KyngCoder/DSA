//insert using .push() O(1)
//delete using .pop()  O(1)
//access using index   O(1)
//iteration O(n)
//.slice(begin,end) returns a portion of an array
//.splice(begin,size,newElement)

// const arr = [1,2,4,5]
// console.log(arr.splice(1,2,3,9,0))
// console.log(arr)

//.concat() joins array
// let array = [1,2,3,4]
// array = array.concat([2,4,9])
// console.log(array)


//.length returns the length of an array


//spread operator (...) use to expand arguments

// function addFourNums(a,b,c,d){
//     return a+b+c+d
// }

// const numbers = [1,2,3,4]
// console.log(addFourNums(...numbers))

//find two array element in an array that add up to a number
//arr and weight

// const twoSum = (array,weight) => {
//     for(let i=0; i<array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//            if(array[i]+array[j] === weight){
//                return `${array[i]},${array[j]}`
//            } 
//         }
//     }return -1
// }

// console.log(twoSum([1,2,3,4,5],9))

// function findSumBetter(arr,weight){
//     let hashtable = {}

//     for(let i=0; i <array.length; i++){
//         let currentElement = arr[i]
//         let difference = weight - currentElement

//         //check the right one already exists
//         if(hashtable[currentelement] !=undefined){
//             return [i,hashtable[weight-currentElement]]
//         }else{
//             //store index
//             hashtable[difference] = i
//         }
//     }
//     return -1
// }