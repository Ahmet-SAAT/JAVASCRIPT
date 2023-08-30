const person = {
    name: "John",
    age: 25,
    salary: 4000,
    lastName: "Doe",
    address: {
        city: "Istanbul",
        district: "Kadikoy",
        street: "Caferaga"
    },
    skills: ["JS", "Java", "C#", "Python"]
};

// KLASIK YONTEM
const message1 = `${person.name} isimli kisinin yasi ${person.age} ve maasi ${person.salary} USD'dir.`;
console.log(message1);

// DESTRUCTURE YONTEMI
let { name, age, salary, skills, address } = person;
console.log(`${name} isimli kisinin yasi ${age} ve maasi ${salary} USD'dir.`);

age = "Ahmet";
console.log(person);

let name2 = person.name;
name2 = "Mehmet";
console.log(person);
skills = ["JS", "Java", "C#", "Python", "C++"];
skills[0] = "JavaScript";
console.log(person);
address.city = "Ankara";
console.log(person);

const myArr = ["JS", "Java", "C#", "Python", "C++"];
const [a, b, c, d, e, f] = myArr;
const [state, setState] = ["Ankara", function () { }];