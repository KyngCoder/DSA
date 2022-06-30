const removeString = (array) => {
    return  array.filter(item => typeof(item) !== 'string')
}
console.log(removeString([1,2,3,4,'a','b','12']))

