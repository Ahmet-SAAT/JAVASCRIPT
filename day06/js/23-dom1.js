function topla() {
    const inputEl1 =
        document.querySelector("#sayi1");
    const inputEl2 =
        document.querySelector("#sayi2");
    const sonucEl = document.querySelector("#sonuc")
    const toplam = +inputEl1.value + +inputEl2.value; //Number(sayi1)+Number(sayi2) ile ayni onlerine +koyduk
    //nicn numbera cevirdik.Kullanic girsleri string olur ve sadece + concat yapar
    console.log(toplam)
    sonucEl.innerText = `TOPLAM : ${toplam}`;
    ///clear
    inputEl1.value = "";
    inputEl2.value = "";
};