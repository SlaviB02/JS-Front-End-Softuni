function create(words) {
   let content=document.getElementById("content");
   for(let i=0;i<words.length;i++)
   {
      let p=document.createElement("p");
      p.textContent=words[i];
      p.style.display="none";
      let div=document.createElement("div");
      div.appendChild(p);
      div.addEventListener('click',show);
      content.appendChild(div);
   }
   function show(e)
   {
    e.target.children[0].style.display='';
   }
}