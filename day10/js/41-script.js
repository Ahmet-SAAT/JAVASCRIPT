
const inputEl=document.querySelector("#birthdate")



function getAge1(){
    console.log(`I am ${2023-1995} years old`);
}
 const thisYear=2023;
function getAge2(){
    const birthYear= +inputEl.value;
    console.log(`I am ${thisYear-birthYear} years old`);

} 

function getAge3(year,birth){
    console.log(`I am ${year-birth} years old`);
}
getAge3(2023,1992);
getAge3(2020,1990)


function topla(a,b){
    console.log(a+b)
}
topla(5,10);

function toplaDefaultDeger(x=0,y=0){//x ve y de deger verilmezse 0 ver dedim
console.log(x+y)
}
toplaDefaultDeger(5);

function yasHesapla1(dogumTarihi){
    console.log(`yasim ${2023-dogumTarihi}`)
}



function yasHesapla2(dogumyili){
return 2023-dogumyili;
}

const myAge=yasHesapla2(1995);
if (myAge<30) {
    console.log("kucuk")
}else{
    console.log("buyuk")
}