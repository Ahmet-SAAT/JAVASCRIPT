const inputEl=document.querySelector("#num");
const resultEl=document.querySelector("#result");


function control(){
    const result=asalSayiMi(inputEl.value);//hesaplanacak
    inputEl.value= "";
    inputEl.focus();
    if (result==="error") {
        resultEl.innerHTML=`<span style="color:red">lutfen gecerli bir sayi giriniz </span>`
    }else{
        resultEl.innerText=`girmis oldugunuz sayi ${result ? "asal sayidir" :"asal sayi degildir"}`
    }
}
function asalSayiMi(sayi){

    if(!sayi|| isNaN(sayi)|| sayi<2){
        return "error";
    }

 if(sayi===2){
    return true;
 }

 if(sayi%2===0){
return false;
 }
 let karekok=Math.sqrt(sayi);
 for( let i=3; i<=karekok;i +=2){
    if(sayi%i===0){
        return false;
    }
 }

};
asalSayiMi(255);