const decrement=document.querySelector('#counter').firstElementChild;
const increment=document.querySelector('#counter').lastElementChild;
let span=document.querySelector('#value');
let valueCounter=0;

valueCounter=Number(span.textContent);

const increase=(e)=>{
valueCounter+=Number(increment.textContent);
span.textContent=valueCounter;
console.log(span.textContent)
}
const decrease=(e)=>{
valueCounter+=Number(decrement.textContent);
span.textContent=valueCounter;
console.log(span.textContent)
}

decrement.addEventListener('click',decrease);
increment.addEventListener('click',increase);


