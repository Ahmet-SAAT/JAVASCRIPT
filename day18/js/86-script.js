const btnStart=document.getElementById("btnStart");
const btnStop=document.getElementById("btnStop");
const priceEl=document.getElementById("prices");

let interval=null;
btnStart.addEventListener("click",()=>{
  //tekrar calismasini engellemek icin bu kodu yazdik
    if (interval) return; 
    
    interval=setInterval(()=>{
    const price=Math.floor(Math.random() *4000)+1000;
    priceEl.innerHTML+=`<li>${price}</li>`;
    },1000)
});


btnStop.addEventListener("click",()=>{
clearInterval(interval)
interval=null;
});