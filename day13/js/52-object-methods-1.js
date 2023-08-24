const person = {
    firstName: 'John',
    lastName: 'Doe',
};

const adam = person;//esitledik

console.log(adam === person);//true

adam.firstName = 'Adam';
adam.lastName = 'Smith';

console.log(adam);//adam smith
console.log(person);//adam smith

const john = Object.create(person);
console.log(john.firstName);//adam

john.firstName = 'John';

console.log(john);//john smith
console.log(john.lastName);//smith
john.lastName = 'Doe';

console.log(john);//john doe
console.log(person);//adam smith

const jane = { ...person };//jane persone denk olsun ama aralarinda baglanti olmasin
console.log(jane);//adam smith
jane.firstName = 'Jane';
jane.lastName = 'Doe';
console.log(jane);//jane doe
console.log(person);//adam smith