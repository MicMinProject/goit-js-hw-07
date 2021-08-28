const input=document.querySelector('#validation-input');

const counter=Number(input.getAttribute('data-length'));

const check=(e)=>{
if(e.currentTarget.value.length===counter) {
  input.classList.add('valid');
  input.classList.remove('invalid');
} else{ input.classList.add('invalid');
        input.classList.remove('valid')}};

input.addEventListener('blur',check)