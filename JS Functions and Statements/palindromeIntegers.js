function palindrome(array)
{

for(let i=0;i<array.length;i++)
{
    if(isPalindrome(String(array[i])))
    {
console.log("true");
    }
    else
    {
        console.log("false");
    }
}




   function isPalindrome(number)
   {
    let j = number.length-1 
    for(let i=0; i<number.length/2; i++){ 
        if(number[i]!=number[j]){ 
            return false; 
        } 
        j--; 
    } 
    return true; 
   }
}
