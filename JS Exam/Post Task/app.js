window.addEventListener("load", solve);

function solve() 
{
  let publishBtn=document.getElementById("publish-btn");
  publishBtn.addEventListener('click',publish);
  let title=document.getElementById("task-title");
  let category=document.getElementById("task-category");
  let content=document.getElementById("task-content");
  function publish()
  {
    if(title.value=='' || category.value=='' || content.value=='')
    {
return;
    }
       let reviewList=document.getElementById("review-list");
       let post=document.createElement("li");
       post.className='rpost';
       let article=document.createElement("article");
       let titleH4=document.createElement("h4");
       titleH4.textContent=title.value;
       let categoryP=document.createElement("p");
       categoryP.textContent="Category: "+category.value;
       let contentP=document.createElement("p");
       contentP.textContent="Content: "+content.value;
       article.appendChild(titleH4);
       article.appendChild(categoryP);
       article.appendChild(contentP);
       let editBtn=document.createElement("button");
       editBtn.classList.add("action-btn");
       editBtn.classList.add("edit");
       editBtn.textContent='Edit';
       let postBtn=document.createElement("button");
       postBtn.classList.add("action-btn");
       postBtn.classList.add("post");
       postBtn.textContent='Post';
       post.appendChild(article);
       post.appendChild(editBtn);
       post.appendChild(postBtn);
       reviewList.appendChild(post);
       editBtn.addEventListener('click',editInfo);
       title.value='';
       category.value='';
       content.value='';
       function editInfo()
       {
        title.value=titleH4.textContent;
        category.value=categoryP.textContent.substring(10);
        content.value=contentP.textContent.substring(9);
        reviewList.innerHTML='';
       }
       postBtn.addEventListener('click',postTask);
       function postTask()
       {
         let pubished=document.getElementById("published-list");
         reviewList.innerHTML='';
         post.removeChild(editBtn);
         post.removeChild(postBtn);
         pubished.appendChild(post);
       }
    
  }


}