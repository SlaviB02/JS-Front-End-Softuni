window.addEventListener("load", solve);

function solve() {
  let nextButton = document.getElementById("next-btn");
  nextButton.addEventListener('click', next);
  function next() {
    let name = document.getElementById("student").value;
    let uni = document.getElementById("university").value;
    let score = document.getElementById("score").value;
    if(name=="" || uni=="" || score=="")
    {
      return;
    }
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    h4.textContent = name;
    p1.textContent = "University: " + uni;
    p2.textContent = "Score: " + score;
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    let li = document.createElement("li");
    li.classList.add("application");
    li.appendChild(article);

    let editButton = document.createElement("button");
    editButton.classList.add("action-btn");
    editButton.classList.add("edit");
    editButton.textContent = "edit";

    li.appendChild(editButton);

    let applyButton = document.createElement("button");
    applyButton.classList.add("action-btn");
    applyButton.classList.add("apply");
    applyButton.textContent = "apply";

    li.appendChild(applyButton);
    let previewList = document.getElementById("preview-list");
    previewList.appendChild(li);
    nextButton.disabled = true;
    document.getElementById("student").value = '';
    document.getElementById("university").value = '';
    document.getElementById("score").value = '';
    editButton.addEventListener('click', edit);
    applyButton.addEventListener('click', apply);
    function edit() {
      document.getElementById("student").value = h4.textContent;
      let univers = p1.textContent.substring(12);
      let scor = p2.textContent.substring(7);
      document.getElementById("university").value = univers;
      document.getElementById("score").value = scor;
      nextButton.disabled = false;
      li.remove();
      console.log("HEY")
    }
    function apply() {
      let applicationList = document.getElementById("candidates-list");
      li.removeChild(editButton);
      li.removeChild(applyButton);
      li.remove();
      applicationList.appendChild(li);
      nextButton.disabled = false;

    }
  }


}
