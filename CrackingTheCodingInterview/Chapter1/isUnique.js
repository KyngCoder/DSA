
const isUnique = (array) => {
    let unique = {}
    for(let i=0; i<array.length; i++){
        if(unique[array[i]] && unique[array[i]] >=1){
            return false
        }else(unique[array[i]] =1)
    } 
}

console.log(isUnique([1,2,3,3,4,5]))

