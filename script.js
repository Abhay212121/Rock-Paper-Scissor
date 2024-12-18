let dataset = ['stone', 'paper', 'scissors']
let botScore = 0;
let userScore = 0;


let stone = document.querySelectorAll('.button')[0]
let paper = document.querySelectorAll('.button')[1]
let scissors = document.querySelectorAll('.button')[2]
let resultBox = document.querySelector('.result')
let score = document.querySelectorAll('.score')
let UserGuess;


const scoreUpdate = () => {
    score[0].textContent = `Your Score:- ${userScore}`
    score[1].textContent = ` Computer Score :- ${botScore}`
}

const reset = () => {
    if (botScore === 10 || userScore === 10) {
        botScore = 0;
        userScore = 0;
        setTimeout(scoreUpdate, 1000)
    }
}


scoreUpdate()


stone.addEventListener('click', () => {
    UserGuess = 'stone'
    myfunc()
    scoreUpdate()
    reset()
})

paper.addEventListener('click', () => {
    UserGuess = 'paper'
    myfunc()
    scoreUpdate()
    reset()
})

scissors.addEventListener('click', () => {
    UserGuess = 'scissors'
    myfunc()
    scoreUpdate()
    reset()
})


const myfunc = () => {
    let botGuess = dataset[Math.floor(Math.random() * 3)]
    if (UserGuess == botGuess) {
        resultBox.textContent = `It's a tie as you both guessed ${botGuess}!!!!`
    }

    else {
        if (UserGuess == 'stone' && botGuess == 'scissors') {
            resultBox.textContent = `You won as the computer used ${botGuess}!!!!`
            userScore++;
        }

        else if (UserGuess == 'paper' && botGuess == 'stone') {
            resultBox.textContent = `You won as the computer used ${botGuess}!!!!`
            userScore++;
        }

        else if (UserGuess == 'scissors' && botGuess == 'paper') {
            resultBox.textContent = `You won as the computer used ${botGuess}!!!!`
            userScore++;
        }

        else {
            resultBox.textContent = `You lost as the computer used ${botGuess}!!!!`
            botScore++;
        }
    }
}