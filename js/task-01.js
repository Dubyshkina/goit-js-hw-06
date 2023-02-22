
const categories = document.querySelector('#categories');
console.log(categories);
const category = categories.children.length;
console.log(`Number of categories: ${category}`);
for(const children of categories.children){
    console.log(`Category : ${children.firstElementChild.textContent}`);
    console.log(`Elements : ${children.lastElementChild.children.length}`);
}

