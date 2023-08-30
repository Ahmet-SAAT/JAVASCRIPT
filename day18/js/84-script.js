const sayHello5=()=>{
    console.log("Hello 5 saniye sonra calisacak fonksiyon")
}
//time outlar geriye id verir.bu id ile timeout durdurulabilir.
const timeoutId=setTimeout(sayHello5,5000);

console.log("once ben calisirim");

setTimeout(()=>{
    document.querySelector("h1").innerText="3 saniye sonra calisti"
},3000);

//sure girilmeden de yazilabilir


console.log("ikinci ben calisirim");
//settimeout yapilara en son calisir.Sure vermezsek de normalden sonra calisir
//cunu timeout yapisi asenkron calisir.

console.log(timeoutId);
clearTimeout(timeoutId);