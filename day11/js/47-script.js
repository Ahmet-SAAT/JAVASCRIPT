//- IIFE’ler bir defaya mahsus çalışması gereken kodların javascript’in
// global değişken listesine hiç bulaşmadan, kendi bloğunda kodlarımızın çalışması içindir.
// Böylelikle yerel değişkenler kullanıldığı için kod optimize olur 
//ve bir miktar da olsa performans artışı gözlenir.


(function() {
    console.log("iife");
})();

!function(){
    console.log("iife2")
}();

+function(){
    console.log("iife3")
}();

-function(){
    console.log("iife4")
}();

(()=>{
    console.log("iife2")})();