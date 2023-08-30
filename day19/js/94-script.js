const btnProgress =document.getElementById("btnProgress");
const btnList =document.getElementById("btnList");
const progressBar =document.getElementById("progressBar");
const listEl =document.getElementById("list");


//progress barin ilerlemesini saglayan fonksiyon
const progress=()=>{
const interval=setInterval(()=>{
    let val=+progressBar.parentElement.getAttribute("aria-valuenow")+1;
   
    if (val>100) {
        val=0;
    }
    progressBar.parentElement.setAttribute("aria-valuenow",val);
    
    //progress barin icindeki yaziyi ve ilerlemesini guncellemek icin kullanilir 
    progressBar.style.width=`${val}%`;
    progressBar.innerHTML=`${val}%`;

    //ilerleme 100 oldugunda intervali durdur.
    if(val>=100) clearInterval(interval);
},50);

};


const loadList=()=>{

    //liste elementini temizliyoruz
    listEl.innerHTML="";
   
    //50 adet lsit olusturup ekliyoriz
    for (let i = 0; i <=50; i++) {
   const li=document.createElement("li");
   li.innerText=`Liste Elemani ${i}`;
   listEl.appendChild(li);
    
}

};

//butinlara click event ekle
btnProgress.addEventListener("click",progress);
btnList.addEventListener("click",loadList);