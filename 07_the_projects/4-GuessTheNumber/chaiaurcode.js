let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0
let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validate(guess)
    })
}

function validate(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please ente4r a number greater than 0')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        console.log(`Random number: ${randomNumber}`)
        numGuess++
        console.log(numGuess)
        if (numGuess === 11) {
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            prevGuess.push(guess)
            updateGuessMessage(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Win!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Tooo low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is Tooo high`)
    }
}

function updateGuessMessage(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    remaining.innerHTML = `${10 - numGuess}`
}

function cleanUpGuess(guess) {
    userInput.value = ''
    remaining.innerHTML = '0'
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        guessSlot.innerHTML = ''
        numGuess = 0
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
