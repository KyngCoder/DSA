
// let num = 230
// let isPrime = true


// // check if number is valid
// if (num <2){
//     isPrime = false
// }else{
//     for(let i=2;i<num;i++){
//         if(num % i === 0){
//             isPrime = false
//             break
//         }
//     }
// }

// console.log(isPrime?{num}:'not prime')

const isPrime = (num) => {
    if(num === 2) return 'is prime'
    if(num <2) return undefined
    for(let i=2; i<num; i++){
        if(num%2 === 0){
            return 'is not prime'
        }else{
            return 'is prime'
        }
    }
}

console.log(isPrime(7))