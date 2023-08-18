const yukseklikEl = document.querySelector("#yukseklik");
const genislikEl = document.querySelector("#genislik");
const resultEl = document.querySelector("#result");



function alanHesapla() {
    const yukseklik = yukseklikEl.value;
    const genislik = genislikEl.value;
    console.log(genislik, yukseklik)

    const result = (yukseklik ?? 100) * (genislik ?? 100);
    resultEl.innerHTML = `SONUC: ${result}`;

}