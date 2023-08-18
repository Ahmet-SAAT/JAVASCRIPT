const discountEl = document.querySelector("#discount");
const productList = document.querySelectorAll("#productList li");
console.log(productList.length);

function setPrices() {
  let discount = discountEl.value;
  discount =
    (!discount || isNaN(discount) || discount > 100 || discount < 0) 
    ? 0 : discount;

   for(let i=0; i<productList.length; i++){
    const priceEl=productList[i].querySelector("span > em")
   
   const price=priceEl.innerText;
   const discountedPrice=price-(price*discount/100).toFixed();
   priceEl.innerText=discountedPrice;
   }
}
