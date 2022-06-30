// const repeatString = (num,string) => {
//     word = ''
//     for(let i=0; i<num; i++){
//        word = word + string
//     }
//     return word
// }

// console.log(repeatString(3,'hi'))

const repeatString = (num,string) => {
    return string.repeat(num)
}
console.log(repeatString(3,'bye'))