const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let callChanger = setInterval(colorChanger, 1000)

function colorChanger() {
let themeColor = getRandomHexColor();
document.body.style = `background-color: ${themeColor};`;
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
    

startBtn.addEventListener('click', () => {
    callChanger = setInterval(colorChanger, 1000); 
   stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
clearInterval(callChanger);
    startBtn.disabled = false;
    
});


//   btns.start.setAttribute("disabled", "true");
//     btns.stop.removeAttribute("disabled", "true");
