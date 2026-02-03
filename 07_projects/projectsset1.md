# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

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

## Project 2

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

## Project 3
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') works same

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```