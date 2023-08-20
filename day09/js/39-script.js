
const num1El = document.querySelector("#num1");


function calculate() {
let sayi=Math.abs(num1El.value);
let toplam=0;
    while(sayi>0){
           const sonBasamak=sayi%10;
           toplam=toplam+sonBasamak;

           sayi=Math.floor(sayi/10);
    }
    alert(toplam);
}
