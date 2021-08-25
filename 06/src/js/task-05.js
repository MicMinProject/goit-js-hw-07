let input=document.querySelector('#name-input');
let output=document.querySelector('#name-output');


const getWords=(e)=>{
output.textContent=e.currentTarget.value;
if(e.currentTarget.value==="") {output.textContent="Anonymous"}

}
input.addEventListener('input',getWords);
