let counterValue=0;

const decrement=document.querySelector('#counter').firstElementChild;
const increment=document.querySelector('#counter').lastElementChild;
let value=document.querySelector('#value');
const firstCallback = () => {
  console.log("First callback!");
};
const increase=()=>{
  counterValue+=1;
  value.textContent=counterValue};
const decrease=()=>{counterValue-=1;value.textContent=counterValue}

decrement.addEventListener('click',decrease);
increment.addEventListener('click',increase);


