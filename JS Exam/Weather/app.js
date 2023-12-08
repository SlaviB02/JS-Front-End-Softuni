const url='http://localhost:3030/jsonstore/tasks';
let currentIdElement='';
let currentIdElement2='';
let loadHistory=document.getElementById("load-history");
loadHistory.addEventListener('click',load);
function load(e)
{
  e.preventDefault();
    let list=document.getElementById("list");
    list.innerHTML='';
   fetch(url)
   .then(res=>res.json())
   .then((data)=>
   {
    Object.values(data).forEach((task)=>
    {
        const div=document.createElement("div");
        div.className='container'

        const h2=document.createElement("h2");
        h2.textContent=task.location;

        const dateH3=document.createElement("h3");
        dateH3.textContent=task.date;
       

        const temperatureH3=document.createElement("h3");
        temperatureH3.setAttribute("id","celsius");
        temperatureH3.textContent=task.temperature;
       
        


        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click',changeWeather)
       function changeWeather(e)
        {
          let inputLocation=document.getElementById("location");
  let inputTemperature=document.getElementById("temperature");
  let inputDate=document.getElementById("date");
  let editButton=document.getElementById("edit-weather");
  let addButton=document.getElementById("add-weather");
          e.preventDefault();
        
        inputLocation.value=task.location;
        inputTemperature.value=task.temperature;
        inputDate.value=task.date;
        editButton.disabled=false;
   
    addButton.disabled=true;
    list.innerHTML='';
editButton.addEventListener('click',putW);
function putW(e)
{
  e.preventDefault();
  const putURL=`${url}/${task._id}`;
        const headers=
        {
          method:'PUT',
         body:JSON.stringify(
          {
            location:inputLocation.value,
            temperature:inputTemperature.value,
            date:inputDate.value,
            _id:currentIdElement
          }
         )
        }
        fetch(putURL,headers)
        .then((res)=>
        {
         
    editButton.disabled=true;

    addButton.disabled=false;
        })
       
    
        }
}
        
         
        const doneBtn = document.createElement('button');
        doneBtn.className = 'delete-btn';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click',removeWeather)
        function removeWeather(e)
        {
              e.preventDefault();
           
        const removeUrl=`${url}/${task._id}`;
        fetch(removeUrl, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      }
         )
          .then(()=>
          {
            list.innerHTML='';
            addButton.disabled=false;

          })

        }
      
        buttonsContainer.appendChild(changeBtn);
        buttonsContainer.appendChild(doneBtn);

        div.appendChild(h2);
        div.appendChild(dateH3);
        div.appendChild(temperatureH3);
        div.appendChild(buttonsContainer);

        list.appendChild(div);
    })
    let editButton=document.getElementById("edit-weather");
    editButton.disabled=true;
   })
}
let addButton=document.getElementById("add-weather");
addButton.addEventListener('click',addWeather);
function addWeather(e)
{
  e.preventDefault();
  let inputLocation=document.getElementById("location");
  let inputTemperature=document.getElementById("temperature");
  let inputDate=document.getElementById("date");
  if(inputLocation.value!='' && inputTemperature.value!='' && inputDate!='')
  {
    const headers={
      method:'POST',
      body:JSON.stringify({
        location: inputLocation.value,
        temperature: inputTemperature.value,
        date: inputDate.value,
      }),
    };
    fetch(url,headers)
    .then()
    .catch((err)=>console.log(err));
    inputLocation.value='';
    inputTemperature.value='';
    inputDate.value='';
  }
}



