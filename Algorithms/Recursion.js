

//How it works
/* a function that call it's self over and over 
again until it reaches it's base case */

//eg.1 to print the first 3 num starting at 3 and ending at 1 
// function countDown(num){
//     if(num<=0){
//         console.log('all done')
//     }else{
//     console.log(num)
//     num--
//     countDown(num)
//     } 
// }
// countDown(3)

//eg.2 
// function sumRange(num){
//     if(num===1) return 1
//     return num + sumRange(num-1)

// }
/*explanation: 3 + sumRange(2) then 2 + sumRange(1)
 num(1)===1 so return 1
 so 2 + 1 = 3 then 3 + 3 = 6 therefore the sumRange of 3 is 6 */
// console.log(sumRange(3))

//eg.3 calculating factorial
function factorial(num){
    if(num===1)return 1
    return num*factorial(num-1)
}
//3*fact(2) = 2*fact(1) = 3*2 = 6
fact(1)= 1
console.log(factorial(3))