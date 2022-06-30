const findPosition = (array,num) => {
    return array.sort(customSort)
}

console.log(findPosition[20,3,5],19)



function customSort(a,b){
    return a-b
}