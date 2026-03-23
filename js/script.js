"use strict"

const arr = [10,4,3,6,8];

arr.pop(); //удаление 
console.log(arr);

arr.push(23);
console.log(arr);

for( let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}

// arr[99] = 0;
console.log(arr.length); //свойство length состоит и индекса последнего элемента + 1

console.log(arr); //[ 1, 2, 3, 6, 23, <94 empty items>, 0 ]


// Методы

arr.forEach(function(itemp, i, arr){
    console.log(`${i}: ${itemp} внутри массива ${arr}`);
});

const str = prompt("", '');
const product = str.split(', ');
console.log(product);
product.sort();


console.log(product.join('; '));


function compareNum(a,b){
    return a-b;
}
arr.sort(compareNum);
console.log(arr);