const median = (array) => {
    if(array.length%2 === 0){
        let item1 = array[array.length/2]
        let item2 = array[(array.length/2)-1]
        let middle = (item2 + item1)/2
        return middle
    }else{
        return array[Math.floor(array.length/2)]
    }
}
console.log(median([1,2,3,4,5,6,7]))