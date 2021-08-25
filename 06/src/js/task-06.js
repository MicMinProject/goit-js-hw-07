const input=document.querySelector('#validation-input');

const check=(e)=>{
if(e.currentTarget.value.length===input.data-length) {
  input.setAttribute(valid);
} else{console.log('not working')}};

input.addEventListener('blur',check)