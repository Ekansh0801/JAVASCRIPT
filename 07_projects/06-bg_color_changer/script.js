const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let varId;
const startChangingColor = () => {
    if(!varId){
    varId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
}
}
const stopChangingColor = () => {
    clearInterval(varId);
    varId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor);