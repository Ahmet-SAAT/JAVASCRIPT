/* 
1-sayfada input olacak
2-inputa fiyat bilgisi girlecek
3-inputun altinda buton olacak butana tiklandiginda fuction calisacak
4-fiyat 500den buyukse yuzde 10 indirim degilse degisiklik yok
5-ciktiyi sayada bir elemet icerisinde gosterecek
*/

function calculate() {
    const priceEl = document.querySelector("#price");
    const discountedPriceEl = document.querySelector("#discountedPrice");
    let price = Number(priceEl.value);

    if (price > 500) {
        price *= 0.9;
        price.toFixed(1);
        discountedPriceEl.innerText = `Yuzde 10 indirim uygulandi. Fiyat : ${price}`;
    } else {
        discountedPriceEl.innerText = `Indirim Uygulanmadi.Fiyat : ${price}`
    }

    //clear
    priceEl.value = "";
};