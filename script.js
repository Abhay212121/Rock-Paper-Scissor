let dataset = ['stone', 'paper', 'scissors']


let stone = document.querySelectorAll('.button')[0]
let paper = document.querySelectorAll('.button')[1]
let scissors = document.querySelectorAll('.button')[2]
let resultBox = document.querySelector('.result')
let UserGuess;
let score = document.querySelectorAll('.score')

let botScore = 0;
let userScore = 0;

const scoreUpdate = () => {
    score[0].textContent = `Your Score:- ${userScore}`
    score[1].textContent = ` Computer Score :- ${botScore}`
}

scoreUpdate()

stone.addEventListener('click', () => {
    UserGuess = 'stone'
    myfunc()
    scoreUpdate()
})

paper.addEventListener('click', () => {
    UserGuess = 'paper'
    myfunc()
    scoreUpdate()
})

scissors.addEventListener('click', () => {
    UserGuess = 'scissors'
    myfunc()
    scoreUpdate()
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