
const largest = (a,b,c) => {
    if (a < b && b > c){
        return `${b} is the largest`
        
    }else if(a>b && a > c){
        return `${a} is the largest`
    }else{
        return `${c} is the largest`
    }
}

console.log(largest(9,6,3))

//or

const biggest = (a,b,c) => {
    return Math.max(a,b,c)
}
console.log(biggest(10,40,20))