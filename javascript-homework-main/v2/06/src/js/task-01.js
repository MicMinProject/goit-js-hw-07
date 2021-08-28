console.log(`Zadanie 1`);
console.log('');

const categories=document.querySelector('#categories');
const quantCategories=categories.children.length;
console.log(`Number of categories: ${quantCategories}`);
console.log('');

for(let i=0;i<quantCategories;i++) {
  const category=categories.children[i].querySelector('h2');
  console.log(`Category: ${category.textContent}`)
  const element=categories.children[i].querySelector('ul').children.length;
  console.log(`Elements: ${element}`)
  console.log('');
}