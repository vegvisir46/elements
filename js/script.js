'use strict';
//__устаревшие методы
// const box = document.getElementById('box'); // конкретный элемент
// console.log(box); 

// const btns = document.getElementsByTagName('button'); // массив элементов по имени тэга
// console.log(btns[2]); // третий элемент массива

// const circles = document.getElementsByClassName('circle'); // массив элементов по имени класса
// console.log(circles);


//__новые методы
// const hearts = document.querySelectorAll('.heart');
// // console.log(hearts);
// hearts.forEach(item => { // item - каждый элемент массива hearts
//     console.log(item);
// });
// const oneHeart = document.querySelector('div'); // без точки !!!
// console.log(oneHeart);

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(box);
      
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';
// circles[1].style.backgroundColor = 'red';

// circles.style.cssText = 'background-color: blue; width: 500px'; // не работает ??

// __непредпочтительный способ изменить стиль всех элементов массива
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

// __предпочтительный способ изменить стиль всех элементов массива
// hearts.forEach (item => {
//     item.style.backgroundColor = 'violet';
// });


// const text = document.createTextNode('Тут был я');
// document.body.append(text);

const div = document.createElement('div');
div.classList.add('black');
// document.body.append(div);

wrapper.append(div); // пуш созданного элемента div в конец блока
// wrapper.prepend(div); // пуш созданного элемента div в начало блока
// wrapper.appendChild(div);  // старый метод, не использовать



// hearts[1].before(div); // пуш созданного элемента div до определенного элемента
// hearts[1].after(div);  // пуш созданного элемента div после определенного элемента

// circles[1].remove();  // удаление элемента

// hearts[1].replaceWith(circles[0]);  //замещение элемента другим, при этом замещающий перемещается

// div.textContent = "Hi";         // запись текста в элемент div
div.innerHTML = "<h1>Hello</h1>";  // запись текста в элемент div в структуре HTML


// *******************************************************************************************
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');        // после элемента
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');     // перед элементом

// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');      // в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');       // в конец элемента
// *******************************************************************************************












