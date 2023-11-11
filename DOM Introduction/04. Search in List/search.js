function search() {
   li = document.getElementsByTagName('li');
   let searchText = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let count = 0;
   for (let i = 0; i < li.length; i++) {

      if (li[i].textContent.includes(searchText))
      {
         li[i].innerHTML = `<bold><u>${li[i].textContent}</u></bold>`;
         count++;
      }


   }
   result.textContent=`${count} matches found`;
}
