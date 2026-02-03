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