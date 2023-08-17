const x = 15;
const y = 4;
const z = 14;

console.log(x > y && z > y && y != 4);
console.log(x > y && "sol taraf truthy bir degeri ise burasi gorunecek");
console.log(y > x && x); //false gorunecek
console.log(x > y && z > y && y); //y gorunecek
console.log(x > y && x && y); //y gorunecek


const a = 5;
const b = 0;
console.log(a > b && b && a); //b


//z>5 && z<25 && alert("z 5 ile 25 arasindadir");


if (a > b && a > 3 && a < 10) {
    console.log("Butun senaryolar tuttu.")
}

const kullaniciSayisi = 0;
const sayi = kullaniciSayisi || "kullanici sayisi bulunamadi"


const isLoggedin = true;
const userName = "";
(isLoggedin && console.log("Kullanici Girisi Yapildi"));

const username = "admin";
const password = "1234";
username === "admin" && password === "1234" && console.log("Giris Basarili")