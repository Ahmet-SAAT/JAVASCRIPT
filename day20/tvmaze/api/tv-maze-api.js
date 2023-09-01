const baseUrl=`https://api.tvmaze.com`;

export const searchShows=(query,callback)=>{
const url=`${baseUrl}/search/shows?q=${query}`
fetch(url,{method:'GET'})
.then(response=>response.json())//response ile gelen json jsye donuyor
.then(data=>callback(data))//js dataya donuyor
};

//export{searchShows}; yukarida export olmasa boyle de olur
//export ile disari aktardik