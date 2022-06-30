const capitalize = (string) => {
  let word = string.split(' ').map(letter =>{
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  })
  return word.join(' ')
}
  
console.log(capitalize('shy-ann do you still love me dear'))