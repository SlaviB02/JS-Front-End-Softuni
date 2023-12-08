function attachEvents() {
    const BASEURL='http://localhost:3030/jsonstore/messenger';
    let sendButtons=document.getElementById("submit");
    sendButtons.addEventListener('click',sendInfo);
  
    function sendInfo(e)
    {
        e.preventDefault();
        let inputElemets=document.getElementsByTagName("input");
        let message=inputElemets[1].value;
        let author=inputElemets[0].value;
        const headers=
        {
         method:'POST',
         body:JSON.stringify({
          author:author,
          content:message,
         })
        }
        fetch(BASEURL,headers)
        .then()
        .catch((err)=>console.log(err));
    }
    let refreshButton=document.getElementById("refresh");
    refreshButton.addEventListener('click',refreshMessages);
    function refreshMessages(e)
    {
        e.preventDefault();
        
        let textArea=document.getElementById("messages");
        textArea.value=''
        fetch(BASEURL)
        .then((res)=>res.json())
        .then((data)=>
        {
            let info=Object.values(data);
            for(let i=0;i<info.length;i++)
            {
                if(i==info.length-1)
                {
                    textArea.value+=`${info[i].author}: ${info[i].content}`;
                }
                else
                {
                    textArea.value+=`${info[i].author}: ${info[i].content}\n`;
                }
            }
        })
    }
}

attachEvents();