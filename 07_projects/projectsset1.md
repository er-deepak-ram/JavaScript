# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 solution

```javascript
console.log("Deepak")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        let id = e.target.id
        switch (id) {
            case "grey":
                body.style.backgroundColor = id
                break;
            case "white":
                body.style.backgroundColor = id
                break;
            case "blue":
                body.style.backgroundColor = id
                break;
            case "yellow":
                body.style.backgroundColor = id
                break;
            case "purple":
                body.style.backgroundColor = id
                break;
            default:
                break;
        }
    })
})
```

## Project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(form.querySelector('#height').value)
    const weight = parseInt(form.querySelector('#weight').value)
    const results = form.querySelector('#results')

    if (height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height'
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight'
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            results.insertAdjacentHTML('beforeend', '<br/>Under Weight!')
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.insertAdjacentHTML('beforeend', '<br/>Congratulations! Your BMI is normal')
        } else {
            results.insertAdjacentHTML('beforeend', '<br/>Overweight!!!')
        }
    }

})
```

## Project 3 solution
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') works same

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Project 4 solution
```javascript
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
```

## Project 5 solution
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='key'>
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    `
})
```

## Project 6 solution
```javascript
// generate a random color

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// console.log(randomColor()) // e.g. "#3E2F1B"
let intervalId;
const startChangingColor = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)

```