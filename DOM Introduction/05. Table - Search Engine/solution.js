function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElement = document.getElementById('searchField');
      let rowElements = document.querySelectorAll('.container tbody tr');
      let searchText = searchElement.value;
      for(let i=0;i<rowElements.length;i++)
      {
         if(rowElements[i].textContent.includes(searchText))
         {
            rowElements[i].className='select';
         }
      }
   }
}