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