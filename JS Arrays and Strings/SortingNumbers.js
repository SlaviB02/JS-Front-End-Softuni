function sortArray(array)
{
  array.sort(function(a, b){return a-b});
let result=[];
let size=array.length;
 for(let i=0;i<Math.floor(size/2);i++)
 {
  result.push(array[i]);
result.push(array[array.length-i-1]);
 }

 if(size%2!=0)
 {
   result.push(array[Math.floor(size/2)]);
 }


    return result;
   
}
sortArray([1, 65, 3, 52, 48, 63, 31, -3, 18]);