import {countries} from"../data/countries.js";
//bunu yapablmek icin htmlde scripde type="module" olmali
//yoksa 2 js tek js dosysinda kullanilamaz

const loadData=()=>{
    let options="";
    for(let country of countries){//her dongude artik eleman degil obje donecek,
        //cunku countries arrayinde objeler var
        console.log(country)
        console.log(country.cca3)
        console.log(country.name.common)
        options +=`<option value="${country.cca3}">${country.name.common}</option>`

    }
    const selectEl=document.querySelector("#countriesList");
    selectEl.innerHTML=options;
};
loadData();