function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input=document.querySelector('input');
const create=document.querySelector('button[data-create]');
const destroy=document.querySelector('button[data-destroy]');
const box=document.querySelector('#boxes');

const destroyBoxes=(e)=>{
  for(let i=0;i<input.value;i++){
    let lastBox=document.querySelector('#boxes').lastElementChild;
    lastBox.remove();

}}

const createBoxes=(e)=>{
for(let i=0;i<input.value;i++){
  let newBox=document.createElement('div');
  newBox.style.width=30+10*[i]+'px';
  newBox.style.height=30+10*[i]+'px';
  newBox.style.backgroundColor=getRandomHexColor();
  box.append(newBox);
}
}

create.addEventListener('click',createBoxes);
destroy.addEventListener('click',destroyBoxes);
