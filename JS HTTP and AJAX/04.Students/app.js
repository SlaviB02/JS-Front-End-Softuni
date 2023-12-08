function attachEvents() {
  const URL='http://localhost:3030/jsonstore/collections/students';
  let submitButton=document.getElementById("submit");
  submitButton.addEventListener('click',addStudent);
  function addStudent(e)
  {
    let inputs=document.getElementsByTagName("input");
    let firstName=inputs[0].value;
    let lastName=inputs[1].value;
    let facultyNumber=inputs[2].value;
    let grade=inputs[3].value;
    if(firstName!='' && lastName!='' && facultyNumber!='' && grade!='')
    {
      const headers=
      {
        method:'POST',
        body:JSON.stringify(
          {
            firstName:firstName,
            lastName:lastName,
            facultyNumber:facultyNumber,
            grade:grade
          }
        )
      }
      fetch(URL,headers);
    }
  }
  let tbody=document.querySelector("tbody");
  fetch(URL)
  .then((res)=>res.json())
  .then((data)=>
  {
    let info=Object.values(data);
    console.log(info);
    for(let i of info)
    {
      let th1=document.createElement("th");
      th1.textContent=i.firstName;
      let th2=document.createElement("th");
      th2.textContent=i.lastName;
      let th3=document.createElement("th");
      th3.textContent=i.facultyNumber;
      let th4=document.createElement("th");
      th4.textContent=i.grade;
      let tr=document.createElement("tr");
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tbody.appendChild(tr);
    }
  })
}

attachEvents();