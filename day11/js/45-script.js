let foo = function () {
    let x = 5;
    console.log(`x degeri fonksiyon icerisinden  erisilebilir: ${x}`);
};

foo();
// console.log(`x degeri fonksiyon disindan erisilemez: ${x}`);

let y = 5;
const foo1 = function () {
    console.log(`y degeri fonksiyon icerisinden  erisilebilir: ${y}`);
};

foo1();
console.log(`y degeri fonksiyon disinda: ${y}`);
//10
//genel olusturulan degere localdade deger atanabilir.Ama lokalde olusturulan genelde gorulemez.

const a = 10;
// fonksiyon scope  1.seviye
const foo2 = function () {
    console.log(`a degeri fonksiyon icerisinden  erisilebilir: ${a}`);
    const b = 15;

    // fonksiyon scope  2.seviye
    const bar = function () {
        console.log(`a degeri bar fonksiyonu icerisinden  erisilebilir: ${a}`);
        console.log(`b degeri bar fonksiyonu icerisinden  erisilebilir: ${b}`);
        const c = 20;
    };
    bar();
    // console.log(`c degeri fonksiyon icerisinden  erisilemez: ${c}`);
};

foo2();
// console.log(`b degerine fonksiyon disinda erisilemez: ${b}`);

const param = 10;

const foo3 = function (param) {
    console.log(param);
}

foo3();
console.log(param);

let sayi1=3;
const fonksiyon=function () {
    sayi1=7;
    console.log(`sayi1 : ${sayi1}`);
};

fonksiyon();
console.log(`sayi1 : ${sayi1}`);

let sayi2=3;
const fonksiyon1=function(){
    let sayi2=7;
    console.log(`sayi2 : ${sayi2}`);
    sayi2+=2;//scope icindeki sayi2ye eger verdik.scope disi degil-
}
fonksiyon1();
console.log(`sayi2=${sayi2}`);//icerde yeniden olusturuldu.Burada onu gormez.
//farkli scoplarda ayni isimli variable olusturulabilir.
//burada sayi1 ya da sayi2 olusamaz cunku zaten olusturduk.

//BLOCK SCOPE

const foo4=function(param){
    if (param<0) {
        let negatif=true;//let ve const scopelara duyarlidir.scope disina cikamaz
        var negatif1=true;//var bloklara duyarsizdir.Gormez.
    };
   /*  console.log(negatif); *///negatif f scobu disina cikamaz hata verir
    console.log(negatif1);//var bloklari gormez tru verir
};

foo4(-4);//clgde negatif varsa hata negatif1 varsa true