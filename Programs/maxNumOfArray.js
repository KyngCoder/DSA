let max = 0

const findMax = (array) => {
    for (let i=0; i<array.length; i++){
        if(array[i]>max){
            max = array[i]
        }
    }
}

findMax([1,2,4,20,22,8])
console.log(max)