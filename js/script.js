// "use strict";
// console.log(1)
// console.log(2+3)
// console.log("Hello Java Script")


// console.lo() команда для вывода в терминал в консоль   !
// const нельзя изменять, а let можно, но конст можно с {} сожно внутри изменять элементы
//var  опасно использовввать ее можно вывести до обьявдение самой переменной выводит undefined



//snake_case
//UPPEER_SNAKE_CASE  такие переменные часто пишут те которые нельзя пропустить например цвета(let COLOR_RED = '#f00') или const
// _apiKey _apiBase
// Kebab-case
// PascallCase для названия классов



//                                    ТИПЫ ДАННЫХ
//ПРОСТЫЕ ТИПЫ ДАННЫХ
//Строки string 
// Логический тип bolean true/false
//null
//NaN not a number  console.log('string' * 9);  по русски не число
//undefined пустое значение например пусиая переменная
//массив частный случай обьекта


// alert(23);
// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18", "18");
// console.log(answer);
// const arr = [1, 2 , 3];
// console.log(arr[1]);

// // const obj = {a:1,  b:2,  c:3};


// const obj = {
//     'Anna':500, 'Alisa': 800,
// };

// let a = ['Anna', 500, 'Alisa', 800];


// const arrObj = {
//     0:1,
//     1:2,
//     2:3
// }

// # ==================================Урок================================================================
// "use sctrict";
// alert("Hello word")
// const result = confirm("Are yo here?");
// console.log(result);


// Первое значение вопрос модальное окно второе значение плэйс холдер с дефолтным значением 18
// const answer = +prompt("Вам есть 18", "18");
// console.log(answer + 5); 
 //! Вся информция приходящая от пользователь приходит в виде string, но это можно изменить


//Массивы
// const answer = [];
//confirm()
// answer[0] = prompt("Как ваше Имя?", '');
// answer[1] = prompt("Как ваша фамилия?",'');
// answer[2] = prompt("сколька вам лет?", '');

// document.write(answer);


// const answer= [];
// answer[0] = prompt("Как ваше Имя?", '2');
// answer[1] = prompt("Как ваша фамилия?",'4');
// answer[2] = prompt("сколька вам лет?", '1');

// console.log();
// console.log(typeof(null));
// console.log(typeof(answer));
//#######################################################################################################

//==================================Урок4===============================================================


//Интраполяция
// "use sctrict";
// const category  = 'toys';

// console.log('https://somurl.com/' +  category + "/" + 4);

// console.log(`https://somurl.com/${category}/5`)


// const user = 'Pavel'


// alert(`Hello, ${user}`)
//########################################################################################################



//==================================Урок5===============================================================

"use strict";
console.log('arr'+' -  object');
console.log(4 + +'5');

console.log(4 + "333434");


let incr = 10, 
    decr = 10;

incr ++; //Инкримент постфиксные
decr--; //диинкримент постфиксные

console.log(incr);
console.log(decr);


++incr;
--decr;

console.log(incr);
console.log(--decr);


console.log(incr++);
console.log(++incr);
console.log(5%2);

console.log(2*4 == 8);
console.log(2*4 === '8');


// &&
// ||
const isChecked = true,
    isClose = false;


console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log();
