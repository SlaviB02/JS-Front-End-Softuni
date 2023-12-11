const BASEURL='http://localhost:3030/jsonstore/tasks';

let loadButton=document.getElementById("load-course");
loadButton.addEventListener('click',load);
let addButton=document.getElementById("add-course");
let editBtn=document.getElementById("edit-course");
function load(e)
{
    e.preventDefault();
    let list=document.getElementById("list");
    fetch(BASEURL)
    .then((res)=>res.json())
    .then((data)=>
    {
        for(let course of Object.values(data))
        {
           let containter=document.createElement("div");
           containter.className='container';

           let title=document.createElement("h2");
           title.textContent=course.title;

           let teacher=document.createElement("h3");
           teacher.textContent=course.teacher;

           let type=document.createElement("h3");
           type.textContent=course.type;

           let description=document.createElement("h4");
           description.textContent=course.description;

           let editButton=document.createElement("button");
           editButton.className='edit-btn';
           editButton.textContent='Edit Course';

           editButton.addEventListener('click',editCourse);
           function editCourse(e)
           {
            e.preventDefault();
            let inputName=document.getElementById("course-name");
            let inputType=document.getElementById("course-type");
            let inputDescription=document.getElementById("description");
            let inputTeacher=document.getElementById("teacher-name");
            inputName.value=course.title;
            inputType.value=course.type;
            inputDescription.value=course.description;
            inputTeacher.value=course.teacher;
            list.innerHTML='';
            editBtn.disabled=false;
            addButton.disabled=true;
            editBtn.addEventListener('click',editTask);
            function editTask(e)
            {
                e.preventDefault();
                const putURL=`${BASEURL}/${course._id}`;
                const headers=
                {
                    method:'PUT',
                    body:JSON.stringify(
                        {
                            description:inputDescription.value,
                            teacher:inputTeacher.value,
                            title:inputName.value,
                            type:inputType.value,
                            _id:course._id
                        }
                    )
                }
                fetch(putURL,headers)
                .then(()=>
                    {
                        inputName.value='';
                        inputType.value='';
                        inputDescription.value='';
                        inputTeacher.value='';
                        editBtn.disabled=true;
            addButton.disabled=false;
                    }
                )
            }

           }

           let finishButton=document.createElement("button");
           finishButton.className='finish-btn';
           finishButton.textContent='Finish Course';

         finishButton.addEventListener('click',finishCourse);
         function finishCourse(e)
         {
            e.preventDefault();
            const deleteURL=`${BASEURL}/${course._id}`;
            list.innerHTML='';
            fetch(deleteURL,
                {
                    method:'DELETE'
                })
                .then()
         }

           containter.appendChild(title);
           containter.appendChild(teacher);
           containter.appendChild(type);
           containter.appendChild(description);
           containter.appendChild(editButton);
           containter.appendChild(finishButton);
           list.appendChild(containter);
        }
    })
}
addButton.addEventListener('click',addCourse);
function addCourse(e)
{
    e.preventDefault();
    let inputName=document.getElementById("course-name");
    let inputType=document.getElementById("course-type");
    let inputDescription=document.getElementById("description");
    let inputTeacher=document.getElementById("teacher-name");
    list.innerHTML='';
     const headers=
     {
        method:'POST',
        body:JSON.stringify(
            {
                description:inputDescription.value,
                teacher:inputTeacher.value,
                title:inputName.value,
                type:inputType.value
            }
        )
     }
     fetch(BASEURL,headers)
     .then(()=>
     {
          inputName.value='';
          inputType.value='';
          inputDescription.value='';
          inputTeacher.value='';
     })

}
//description
//teacher
//title
//type














