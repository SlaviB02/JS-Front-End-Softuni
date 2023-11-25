function addItem() {
   let input=document.querySelector("#newItemText").value;
   let li=document.createElement("li");
   li.textContent=input;
   let items=document.querySelector("#items");
   items.appendChild(li);
   document.querySelector("#newItemText").value='';
}