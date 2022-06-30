
const rockPaperScissor = (player1,player2) => {
    if(player1 === 'rock'){
        if(player2 === 'rock'){
            return 'draw'
        }
        if(player2 === 'scissor'){
            return 'player1 won'
        }else{
            return 'player2 won'
        }

    }else if(player1 === 'paper'){
        if(player2 === 'paper'){
            return 'draw'
        }
        if(player2 === 'scissor'){
            return 'player1 won'
        }
        if(player2 === 'rock'){
            return 'player1 won'
        }

    }else if(player1 === 'scissor'){

        if(player2 === 'scissor'){
            return 'draw'
        }
        if(player2 === 'rock'){
            return 'player2 won'
        }else{
            return 'player1 won'
        }
    }
}

console.log(rockPaperScissor('scissor','rock'))