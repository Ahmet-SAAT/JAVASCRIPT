const car1 = {
    brand: "Audi",
    model: "A8",
    color: "black",
    model: "A6"
};

console.log(car1);

const car2 = {
    brand: "BMW",
    year: 2019,
};

Object.assign(car1, car2);
console.log(car1);//Bmw ve 2009 dahil olur audi gider
console.log(car2);//sadece bmw ve 2009 ikinciyi ilke atadik
console.log(car1 === car2);//false

const car3 = Object.assign(car1, car2);//asign halini car3e asign ettik.car bir zaten degismisti 
console.log(car3);
console.log(car1 === car3);//true

// car3.brand = "Mercedes";
// console.log(car1);//car1 car3 bagli artik bmw gider mercedes gelir

const car5 = {
    new: "new"
}

const car4 = Object.assign({}, car1, car5);
//car1 ve car5 ikisi birlikte assign edildi.ama car5  car1e assign edilmedi
//boyle yaparak iliskiyi kaldiririz oysa denkler
//cunku bosluga assign edip sonra car 4e assign ettik.
//car1 ve car4 degerleri ayni olsada ilsiki kalmadi

console.log(car4);
console.log(car4 === car1);//false
console.log(car1);
