const form=document.querySelector('.login-form');
const email=document.querySelector('input[type="email"]');
const password=document.querySelector('input[type="password"]');

const submitFc=(e)=>{
e.preventDefault();

const{elements: {email,password}}=e.currentTarget;

if(email.value===""||password.value===""){
alert('Fill up all the poles, please')
}else{
 const firstProperty=email.getAttribute('name');
 const secondProperty=password.getAttribute('name');
  
  const user={};

  user[firstProperty]=email.value;
  user[secondProperty]=password.value
  console.log(user)
}
e.currentTarget.reset()
}


form.addEventListener('submit',submitFc)
