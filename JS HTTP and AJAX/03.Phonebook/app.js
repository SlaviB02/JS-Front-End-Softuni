function attachEvents() {
    const URL='http://localhost:3030/jsonstore/phonebook';
let loadButton=document.getElementById("btnLoad");
loadButton.addEventListener('click',loadInfo);
function loadInfo(e)
{
    e.preventDefault();
    let phoneBook=document.getElementById("phonebook");
    phoneBook.innerHTML='';
 fetch(URL)
 .then((res)=>res.json())
 .then((data)=>
 {
     for(let p of Object.values(data))
     {
       let li=document.createElement("li");
       li.textContent=`${p.person}: ${p.phone}`;
       let deleteBtn=document.createElement("button");
       deleteBtn.textContent='Delete';
       li.appendChild(deleteBtn);
       
        let delURL=`${URL}/${p._id}`;
        deleteBtn.addEventListener('click',deletePhone);
        function deletePhone(e)
        {
            e.preventDefault()
            fetch(delURL,{method:'DELETE'})
            phoneBook.innerHTML='';
        }
        phoneBook.appendChild(li);
     }
 })
}
let createButton=document.getElementById("btnCreate");
createButton.addEventListener('click',createPhone);
function createPhone(e)
{
    e.preventDefault();
    let personEl=document.getElementById("person");
    let phoneEl=document.getElementById("phone");
    
    const headers=
    {
        method:'POST',
        body:JSON.stringify(
            {
        person: personEl.value,
        phone: phoneEl.value
            }
        )
    }
    fetch(URL,headers)
    .then((res)=>
    {
        phoneEl.value='';
        personEl.value='';
    }
       
    )
    .catch();

}



}

attachEvents();