//sayfaya ilk giriste 1 onraki girislerde 1 artarak devam edeck

const handleCounter=()=>{
    let count=localStorage.getItem("pageCounter");
    count??=0;//count varsa o yoksa 0 olsun
    count++;
    //countu localstorage kaydet
    localStorage.setItem("pageCounter",count);
    //countu ekrana yazdr
    const counterEl=document.getElementById("count");
    counterEl.innerHTML=`uygulamaniza ${count} kez giris yapildi`
};

const handleMessage=()=>{
    //localstarogede name diye bir key var mi varsa name degerini yoksa quest degerini al
    const name=localStorage.getItem("name") ?? "Guest";
    const mesajEl=document.getElementById("welcomeMessage");
    mesajEl.innerHTML=`Hosgeldin ${name}`;

};

//save butonu tklandiginda name degeri localstarage kaydet
const saveButton=document.getElementById("btnSave");

saveButton.addEventListener("click",()=>{
    const name=document.getElementById("txtName").value;
    localStorage.setItem("name",name);
})
handleCounter();
handleMessage();