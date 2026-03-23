"use strict";


let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const  obj = {
    a : 5,
    b: 1,
};


const copy = obj;


copy.a = 10;
console.log(copy);
console.log(obj);
//поверхностное копировавние обьектов ну или клонирование
 function copyy(mainObj){
    let objCopy ={};

    let  key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];

    }
    return objCopy;
 }


 const numbers = {
    a:2,
    b: 5,
    c:{
        x: 7,
        y:4
    }
 };



 const newNumbers = copyy(numbers);

 newNumbers.a = 10;

 newNumbers.c.x = 10;
 console.log(newNumbers);
 console.log(numbers);
const add ={
    d:17,
    e:20
};


console.log(Object.assign(numbers, add))
const clon = Object.assign({}, add);

clon.d = 10;
console.log(add);
console.log(clon);



const oldArray = ['a','b', 'c'];
const newArray = oldArray.slice();
newArray[2] = 'hjfekejvkekv';
console.log(newArray);
console.log(oldArray);

const video =  ['Youtube', 'rutube', 'vimeo'],
    blogs = ['wordkwl','cnkwkcw','cwwc'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}


const num = [2,5,7];


log(...num);


const array = ['q','b'];
const NeArray = [...array];


const q ={
    one:1,
    two:2
};

const newObj ={...q

};


