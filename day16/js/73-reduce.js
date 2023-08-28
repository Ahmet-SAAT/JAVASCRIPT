const arr = [23, 5, 74, 7];

const sum = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
}, 0);//o dan baslasin ve toplasin dedik acc toplam verir cur eleman 

console.log(sum);

const multiply = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc * cur;//1 den baslasin ve carpsin dedik acc toplam verir cur eleman 
}, 1);

console.log(multiply);

const max = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return Math.max(acc, cur);
})

console.log(max);