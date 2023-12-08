function attachEvents() 
{
    const postURL='http://localhost:3030/jsonstore/blog/posts';
    const commentsURL='http://localhost:3030/jsonstore/blog/comments';
    let loadButton=document.getElementById("btnLoadPosts");
    loadButton.addEventListener('click',loadPosts);
    let postArray=[];
    function loadPosts(e)
    {
        e.preventDefault();
        let postsElement=document.getElementById("posts");
        fetch(postURL)
        .then((res)=>res.json())
        .then((data)=>
        {
           let posts=Object.values(data);
           for(let post of posts)
           {
            const optionElement = document.createElement('option');
            optionElement.textContent = post.title;
            optionElement.value =post.id;
              postsElement.appendChild(optionElement);
              let postObject={body:post.body,id:post.id};
              postArray.push(postObject);
           }
            
        }
        )
    }
    let viewButton=document.getElementById("btnViewPost");
    viewButton.addEventListener('click',loadComments);
    function loadComments(e)
    {
        e.preventDefault();
        let currentElement = document.getElementById("posts");
        let selectedElement = currentElement.options[currentElement.selectedIndex];
        let postTitle=document.getElementById("post-title");
        postTitle.textContent='';
        let postBody=document.getElementById("post-body");
        postBody.textContent='';
        let postComments=document.getElementById("post-comments");
        postComments.innerHTML='';
        fetch(commentsURL)
        .then((res)=>res.json())
        .then((data)=>
        {
            let comments=Object.values(data);
            for(let comment of comments)
            {
                if(comment.postId===selectedElement.value)
                {
                    for(let i=0;i<postArray.length;i++)
                    {
                        if(comment.postId==postArray[i].id)
                        {
                            postBody.textContent=postArray[i].body;
                        }
                    }
                    postTitle.textContent=selectedElement.textContent;
                    let li=document.createElement("li");
                    li.textContent=comment.text;
                    postComments.appendChild(li);
                }
            }
        })
        
    }


}

attachEvents();