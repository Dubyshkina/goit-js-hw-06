
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayIngredients = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
});
document.querySelector('#ingredients').prepend(...arrayIngredients);
// const ingredientsItems =[];

//  for(const ingredient of ingredients){
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = ingredient;
//   ingredientsItems.push(item);
//   console.log(item);
//  }
//  document.querySelector('#ingredients').prepend(...ingredientsItems);




