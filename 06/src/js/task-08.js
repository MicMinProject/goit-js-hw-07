const form=document.querySelector('.login-form');
const email=document.querySelector('input[type="email"]');
const password=document.querySelector('input[type="password"]');

const submitFc=(e)=>{
e.preventDefault();

const{elements:{email,password}}=e.currentTarget;

let dataEmail=email.value;let dataPassword=password.value;

if(dataEmail==='' || dataPassword===''){
return alert(`Fill up all the poles, please`)}
else{
  const data={
    email: dataEmail,
    password: dataPassword,
  }
  console.log(data)
  return form.reset()
}

}
form.addEventListener('submit',submitFc)
