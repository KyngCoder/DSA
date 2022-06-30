const cleanArray = (array) => {
    let newArray = [...new Set(array)]
    return newArray
}

console.log(cleanArray([1,2,2,3]))