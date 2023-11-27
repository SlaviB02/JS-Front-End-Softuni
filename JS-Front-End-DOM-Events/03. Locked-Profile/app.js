function lockedProfile() {
    let radioLocked=document.querySelectorAll("input");
    let buttons=document.querySelectorAll("button");
    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener('click',show);
    }
    function show(e)
    {
        let locked=e.target.parentNode.children[2];
        let button=e.target.parentNode.children[10];
         if(locked.checked!=true)
         {
            
           let div=e.target.parentNode.children[9];
           if(div.style.display==="inline-block")
           {
             div.style.display="none";
             button.textContent="Show more";
           }
           else
           {
            div.style.display="inline-block";
            button.textContent="Hide it";
           }
           
         
        }
    }
}