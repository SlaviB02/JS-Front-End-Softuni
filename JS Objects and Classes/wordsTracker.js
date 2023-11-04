function tracker(array)
{
    let wordsToLook=array[0].split(" ");
    let wordsArray={};
    for(let i=0;i<wordsToLook.length;i++)
    {
       let key=wordsToLook[i];
       wordsArray[key]=0;
    }
    for(let i=1;i<array.length;i++)
    {
       
        if(wordsArray.hasOwnProperty(array[i])==true)
        {
            wordsArray[array[i]]++;
        }
       
    }
   let wordsEntries=Object.entries(wordsArray);
   wordsEntries.sort((a, b) => {
    valueB = b[1];
    valueA = a[1];
    if(valueA>valueB)
    {
        return -1;
    }
    if(valueA<valueB)
    {
        return 1;
    }
    return 0;
   
    });
  
    for(let i=0;i<wordsEntries.length;i++)
    {
        console.log(`${wordsEntries[i][0]} - ${wordsEntries[i][1]}`);
    }
    
  
   
}
