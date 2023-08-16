/* 
1-sayfada input olacak
2-inputa fiyat bilgisi girlecek
3-inputun altinda buton olacak butana tiklandiginda fuction calisacak
4-fiyat 500den buyukse yuzde 10 indirim  diger durumda yuzde 5
5-ciktiyi sayada bir element icerisinde gosterecek
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
        price *= 0.95;
        discountedPriceEl.innerText = `Yuzde 5 indirim uygulandi.Fiyat : ${price}`
    }

    //clear
    priceEl.value = "";
};