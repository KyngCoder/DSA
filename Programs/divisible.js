// //write a function that checks if a number n is divisible by x and y

// function divisible(n,x,y){
//     if(n%x === 0 && n%y===0) return 'divisible by x and y'
// }

// console.log(divisible(7,3,2))

const greenTea = () => 'greenTea'
const blackTea = () => 'blackTea'

const getTea = (prepareTea,numOfCups) => {
    const teaCups = []
    for(let i=1; i<=numOfCups; i++){
        const teaCup = prepareTea()
        // console.log(teaCup)
        teaCups.push(teaCup)
    }
    return teaCups
}

const tea4BlackFcc = getTea(blackTea,13)
// const tea4GreenFcc = getTea(greenTea,27)
// console.log(tea4BlackFcc,tea4GreenFcc)
