const btn = document.querySelectorAll('.button')
const body = document.querySelector("body")

console.log(btn)

btn.forEach( (button) =>{
    console.log(button)
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id;
    })
})