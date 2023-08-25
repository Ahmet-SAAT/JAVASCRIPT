const animals=['cat','dog','horse','sheep','bird']

const numbers=[1,2,3,4,5];


const foo=(animal,index)=>{
console.log(animal,index)
}
animals.forEach(foo);



numbers.forEach((number,index)=>{
numbers[index]=number*2;
});
console.log(numbers)

let newNumber=[];
numbers.forEach((number,index)=>{
newNumber[index]=number*5;
});
console.log(newNumber)

let newNumber2=[];
numbers.forEach((number)=>{
newNumber2.push(number*8);
});
console.log(newNumber2)


