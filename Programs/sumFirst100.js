const sum10 = (num) => {
    if(num===1) return 1
    return num + sum10(num-1)
}
console.log(sum10(10))

//or 
let sum = 0
function sumFirst10 (num){
    for(let i=1; i<=num; i++){
         sum += i
        
    }
    return sum

}
console.log(sumFirst10(10))