"use strict";

const animals = ['dog', 'cat', 'sheep', 'rabbit', 'monkey', 'tiger', 'bear', 'elephant', 'lion', 'zebra'];

const animal = {
    name: 'dog',
    age: 3,
    color: 'brown',
    weight: 20
}

// ARRAY'DE KULLANIMI
for (let i of animals) {
    console.log(i);//degerleri verir
 
};

console.log('-------------------');
for (let [x,y] of animals.entries()) {
    console.log(x,y);//x indeksi y degeri verir
    
};
// OBJECT'DE KULLANIMI
for (let [x, y] of Object.entries(animal)) {
    console.log(x, y);//key ve deger verir
};

for (let letter of "JavaScript") {
    console.log(letter);
}

// ARRAY'I STRING HALE GETIRMEK
let arabalar = ['BMW', 'Mercedes', 'Opel', 'Mazda'];
let str = "";

for (let araba of arabalar) {
    console.log(araba);
    str += araba + ", ";
}

console.log(str);
console.log(arabalar.join(", "))