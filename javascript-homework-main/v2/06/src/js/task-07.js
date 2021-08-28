const input=document.querySelector('#font-size-control');
const span=document.querySelector('#text');




const change=(e)=>{
 console.log(span.style.fontSize=e.currentTarget.value+'px')

}
input.addEventListener('input',change);

