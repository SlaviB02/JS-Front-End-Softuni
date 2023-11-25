function focused() {
   let elements=document.querySelectorAll("div input");
   for(let el of elements)
   {
    el.addEventListener("focus",focus);
    el.addEventListener("blur",loseFocus);
   }
   function focus(e)
   {
    let parent = e.target.parentNode;
    parent.classList.add("focused");
   }
   function loseFocus(e)
   {
    let parent = e.target.parentNode;
    parent.classList.remove("focused");
   }
}