"use strict";

const animals = ['dog', 'cat', 'sheep', 'rabbit', 'monkey', 'tiger', 'bear', 'elephant', 'lion', 'zebra'];

const animal = {
    name: 'dog',
    age: 3,
    color: 'brown',
    weight: 20
}

// ARRAY'DE KULLANIMI
for (let i in animals) {
    console.log(i);//index deger verir 0 1 2 3
    console.log(animals[i]);
};

console.log('-------------------');

// OBJECT'DE KULLANIMI
for (let variable in animal) {
    console.log(variable);//variable key degerini yazar
    console.log(animal[variable]);
};