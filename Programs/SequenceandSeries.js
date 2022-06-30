
const mathSequence = (array) => {
    let arith = new Set()
    let geo = new Set()

    for(let i=1; i<array.length; i++){
        let number1 = array[i] - array[i-1]
        arith.add(number1)
        let number2 = array[i] / array[i-1]
        geo.add(number2)
    }
    if(arith.size===1){
        return 'arithmetic'
    }
    if(geo.size===1){
        return 'geometric'
    }
    return -1
}
console.log(mathSequence([3,5,7,10,11,14]))