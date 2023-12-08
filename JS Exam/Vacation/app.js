const BASEURL='http://localhost:3030/jsonstore/tasks';
let loadVacations=document.getElementById("load-vacations");
loadVacations.addEventListener('click',load);
let list=document.getElementById("list");
list.innerHTML='';
function load(e)
{
    e.preventDefault();
    fetch(BASEURL)
    .then((res)=>res.json())
    .then((data)=>
    {
        for(let vac of Object.values(data))
        {
            let container=document.createElement("div");
            container.className='container';
            let name=document.createElement("h2");
            name.textContent=vac.name;
            let date=document.createElement("h3");
            date.textContent=vac.date;
            let days=document.createElement("h3");
            days.textContent=vac.days;
            let changeButton=document.createElement("button");
            changeButton.className='change-btn';
            changeButton.textContent="Change";
            let doneButton=document.createElement("button");
            doneButton.className='done-btn';
            doneButton.textContent="Done";
            container.appendChild(name);
            container.appendChild(date);
            container.appendChild(days);
            container.appendChild(changeButton);
            container.appendChild(doneButton);
            list.appendChild(container);
            changeButton.addEventListener('click',editVacation);
            function editVacation(e)
            {
                e.preventDefault();
                let nameInput=document.getElementById("name");
        let daysInput=document.getElementById("num-days");
        let dateInput=document.getElementById("from-date");
        nameInput.value=vac.name;
        daysInput.value=vac.days;
        dateInput.value=vac.date;
      
        let addButton=document.getElementById("add-vacation");
        addButton.disabled=true;
        list.innerHTML='';
        let editButton=document.getElementById("edit-vacation");
        editButton.disabled=false;
        editButton.addEventListener('click',editV);
        function editV(e)
        {
            e.preventDefault();
            const editURL=`${BASEURL}/${vac._id}`;
            fetch(editURL,
                {
                    method:'PUT',
                    body:JSON.stringify(
                        {
                            name:nameInput.value,
                            days:daysInput.value,
                            date:dateInput.value,
                            _id:vac._id
                        }
                    )
                })
                .then(()=>
                {
                    nameInput.value='';
                    daysInput.value='';
                    dateInput.value='';
                })
        }
            }
            doneButton.addEventListener('click',deleteVacation);
            function deleteVacation(e)
            {
                e.preventDefault();
                const deleteURL=`${BASEURL}/${vac._id}`;
               
                fetch(deleteURL,
                    {
                        method:'DELETE'
                    })
                    .then(()=>
                    {
                        list.innerHTML='';
                    }
                    )
            }
        }

        let editButton=document.getElementById("edit-vacation");
        editButton.disabled=true;
      
    })
   

}
let addButton=document.getElementById("add-vacation");
addButton.addEventListener('click',addVacation);
function addVacation(e)
{
    e.preventDefault();
    let nameInput=document.getElementById("name");
    let daysInput=document.getElementById("num-days");
    let dateInput=document.getElementById("from-date");
    list.innerHTML='';
    fetch(BASEURL,
        {
            method:'POST',
            body:JSON.stringify(
                {
                    name:nameInput.value,
                    days:daysInput.value,
                    date:dateInput.value
                }
            )
        })
        .then(()=>
            {
                nameInput.value='';
                 daysInput.value='';
                 dateInput.value='';
            }
        )
}
