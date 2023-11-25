function solve() {
  let buttons=document.querySelectorAll(".add-product");
  for(let add of buttons)
  {
   add.addEventListener('click',addInBasket);
  }
  let result=document.querySelector(".shopping-cart textarea");
  function addInBasket(e)
  {
    let itemInfo=e.target.parentNode.parentNode.children;
    let itemName=itemInfo[1].children[0].textContent;
    let itemPrice=itemInfo[3].textContent;
    let temp=`Added ${itemName} for ${Number(itemPrice).toFixed(2)} to the cart.\n`;
    result.value+=temp;
  }
  let checkout=document.querySelector(".checkout");
  checkout.addEventListener('click',checkoutShop);
  function checkoutShop(e)
  {
      let items=result.value.split('\n');
      let sum=0;
      let array={};
      let resultArray=[];
      for(let i=0;i<items.length-1;i++)
      {
         let text=items[i].substring(6).split(" for ");
         let name=text[0];
         let price=text[1].substring(0,4);
sum+=Number(price);
if(!array.hasOwnProperty(name))
{
array[name]=1;
}
      }
      for(let key in array)
      {
         resultArray.push(key);
      }
result.value+=`You bought ${resultArray.join(", ")} for ${sum.toFixed(2)}.`;
for(let button of buttons)
  {
    button.disabled=true;
  }
  checkout.disabled=true;
  }
}