'use strict';
//__устаревшие методы
// const box = document.getElementById('box'); // конкретный элемент
// console.log(box); 

// const btns = document.getElementsByTagName('button'); // массив элементов по имени тэга
// console.log(btns[2]); // третий элемент массива

// const circles = document.getElementsByClassName('circle'); // массив элементов по имени класса
// console.log(circles);


//__новые методы
const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

hearts.forEach(item => { // item - каждый элемент массива hearts
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);





