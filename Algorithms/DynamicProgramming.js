// //fibonnaci

// const fibonnaci = (num) => {
//     if(num === 1 || num === 2) return 1
//     return  fibonnaci(num-1) + fibonnaci(num-2) 
// }
// console.log(fibonnaci(8))

// //memomaization
// function fib(num,memo = []){
//     if(memo[num] !== undefined) return memo[num]
//     if(num <=2) return 1
//     var res = fib(num-1,memo) + fib(num-2,memo)
//     memo[num] = res
//     return res
// }
// console.log(fib(70))

// //tabulation
// function fib(num){
//     if(num <=2) return 1
//     let fibsNum = [0,1,1]
//     for(let i=3; i<=num; i++){
//         fibsNum[i] = fib(i-1) + fib(i-2)
//     }
//     return fibsNum[num]
// }
// console.log(fib(50))


//memo
// const fib = (num,memo={}) => {
//     if(num in memo) return memo[num]
//     if(num <=2) return 1
//     memo[num] = fib(num-1,memo) + fib(num-2,memo)
//     return memo[num]
// }

// console.log(fib(50))

/*
say that you are a traveler on a 2d grid.you begin in the top left corner and your goal is to make it to the bottom-right corner. you can only move down or right.
in how many ways can you reach your goal in a grid with m*n dimensions
 */


// const gridTraveler = (n,m,memo={}) => {
//     let key = n + "," + m
//     if(key in memo) return memo[key]
//     if(n===1 && m ===1) return 1
//     if(n===0 || m === 0) return 0
//     memo[key] = gridTraveler(n-1,m,memo) + gridTraveler(n,m-1,memo)
//     return memo[key]
// }
// console.log(gridTraveler(30,50))

//how to implement
/*
1.1 visualize it as a tree
1.2 implement the tree recursively
1.3 test it
2.1. add a memo object
2.2 add a base case to return memo values
2.3 store return values in memo
 */

