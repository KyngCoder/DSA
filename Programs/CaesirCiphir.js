function rot13(string){
    return string.replace(/A-Z/g,(letter)=>{
        console.log(letter)
    })
}

console.log(rot13('SERR PBQR PNZC'))