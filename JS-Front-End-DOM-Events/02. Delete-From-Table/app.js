function deleteByEmail() {
    let email=document.querySelector("label input").value;
    let emails=Array.from(document.querySelectorAll("tbody tr td"));
    let result=document.getElementById("result");
    for(let i=1;i<emails.length;i+=2)
    {
        if(email===emails[i].textContent)
        {
             let row=emails[i].parentNode;
             row.parentNode.removeChild(row);
              result.textContent="Deleted.";
              return;
        }
    }
    result.textContent="Not found.";
   

}