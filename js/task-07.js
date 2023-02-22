// Напиши скрипт, який реагує на зміну значення input#font-size-control 
// (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const rangeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');
 

const changeOutput = (event) => {
    textOutput.style.fontSize = `${rangeInput.value}px`;
}

rangeInput.addEventListener('input', changeOutput);
