const user = {
    name: "john",
    age: 30,
    salary: {
        amount: 3000,
        currency: "USD",
    },
    tax: {
        first: 100,
    },

};
const user2 = {
    name: "john",
    age: 30,
    salary: {
        amount: 3000,
        currency: "USD",
    },
    tax: {
        first: 100,
    },
    address: {
        zipCode: '1455',
    }
};

console.log(user);
console.log(user.age);
console.log(user.salary.amount);
console.log(user.adress ?.city.name); //adress var mi dedik hata vermez undefined verir.Optional yaptik
console.log(user.tax.second ?.f);
//console.log(user2.address?.city.name)//hata verir olan seye optional verdin.city yok ne olacak hata
console.log(user2.address ?.city ?.name) //hata vermez her ihtimali hesapladik 
const a = 3;