window.addEventListener("load", solve);

function solve() {
    let addButton=document.getElementById("add-btn");
    
    addButton.addEventListener('click',addScore);
    function addScore()
    {
    
      let name=document.getElementById("player");
    let score=document.getElementById("score");
    let round=document.getElementById("round");
    if(name.value=="" || score.value=="" || round.value=="")
    {
      return;
    }
      let p1=document.createElement("p");
    p1.textContent=name.value;
    let p2=document.createElement("p");
    p2.textContent="Score: "+score.value;
    let p3=document.createElement("p");
    p3.textContent="Round: "+round.value;
    let article=document.createElement("article");
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    let li=document.createElement("li");
    li.classList.add("dart-item");
    li.appendChild(article);
    let editButton=document.createElement("button");
    editButton.classList.add("btn");
    editButton.classList.add("edit");
    editButton.textContent="edit";
  li.appendChild(editButton);
  let okButton=document.createElement("button");
  okButton.classList.add("btn");
  okButton.classList.add("ok");
  okButton.textContent="ok";
  li.appendChild(okButton);
  let sureList=document.getElementById("sure-list");
  sureList.appendChild(li);
  addButton.disabled=true
  name.value="";
  score.value="";
  round.value="";
  editButton.addEventListener('click',editScore);
  function editScore()
  {
    name.value=p1.textContent;
    score.value=p2.textContent.substring(7);
    round.value=p3.textContent.substring(7);
    li.remove();
    addButton.disabled=false;
  } 
  okButton.addEventListener('click',okScore);
  function okScore()
    {
       li.removeChild(editButton);
       li.removeChild(okButton);
       let scoreBoard=document.getElementById("scoreboard-list");
       scoreBoard.appendChild(li);
       addButton.disabled=false;
    }
    let clearButton=document.querySelectorAll("button");
    clearButton[clearButton.length-1].addEventListener('click',clear);
    function clear()
    {
      location.reload();
    }
  }
}