import { searchShows } from "../api/tv-maze-api";

//timeout idyi tutacagimiz degisken
let timeoutSearch=null;
//DOMA ERISIM
const tvShowListe=document.getElementById('tvShowList');
const searchInput=document.getElementById('search');
//inputa veri girildiginde searchShow calissin 
searchInput.addEventListener("input",(e)=>{
const query=e.target.value;
//timeout varsa temizle
if (timeoutSearch) {
    clearTimeout(timeoutSearch)
};
//yeni timeout olustur
timeoutSearch=setTimeout(()=>{
    searchShows(query,(gelenData)=>{createMovie(gelenData)})
},500);





});