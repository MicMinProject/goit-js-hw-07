let counterValue=0;

const decrement=document.querySelector('#counter').firstElementChild;
const increment=document.querySelector('#counter').lastElementChild;
let value=Number(document.querySelector('#value').textContent);
const firstCallback = () => {
  console.log("First callback!");
};
const increase=()=>{return counterValue+1};
const decrease=()=>counterValue-1;

decrement.addEventListener('click',decrease);
increment.addEventListener('click',increase);
console.log(value)
value=counterValue;
console.log(value)

