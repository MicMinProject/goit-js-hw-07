console.log(`Zadanie 2`);
console.log('');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList=document.createElement('ul');
makeList.setAttribute('class','ingredients');

const ingredientsList = ingredients.forEach(ingredient=>{
  const listing=document.createElement('li');
  makeList.append(listing);
  listing.textContent=ingredient;
  return listing.setAttribute('class','item');
})

console.log(makeList)

