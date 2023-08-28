const tryPriceList=[2400,15000,1800,600,3000,9000];

const usd=26.54;
const euro=28.69;


const usdPriceList=tryPriceList.map((price)=>{
    return (price/usd).toFixed(2)
});

const euroPriceList=tryPriceList.map((x)=>{
    return (x/euro).toFixed(2)
});

console.log(usdPriceList);
console.log(euroPriceList);

const tryListEl=document.querySelector("#try")
const usdListEl=document.querySelector("#usd")
const euroListEl=document.querySelector("#euro")

tryListEl.innerHTML=tryPriceList.join(" tl,")+"tl"
usdListEl.innerHTML=usdPriceList.join(" $,")+"$"
euroListEl.innerHTML=euroPriceList.join(" euro,")+"euro"