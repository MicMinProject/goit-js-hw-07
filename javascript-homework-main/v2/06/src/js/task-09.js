function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let body=document.querySelector('body');
const button=document.querySelector('button[type="button"]');
const span=document.querySelector('.color');

const changeColor=(e)=>{
 
const newColor=body.style.backgroundColor=getRandomHexColor();
  span.textContent=newColor;
}

button.addEventListener('click',changeColor)