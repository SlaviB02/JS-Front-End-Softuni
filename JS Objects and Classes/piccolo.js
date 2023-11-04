function parking(array)
{
    let carArray={};
    for(let i=0;i<array.length;i++)
    {
        let carInfo=array[i].split(", ");
        let direction=carInfo[0];
        let number=carInfo[1];
        if(direction=="IN")
        {
            carArray[number]=1;
        }
        else
        {
        delete carArray[number];
        }

    }
   
    
        let carEntries=Object.entries(carArray);
        carEntries.sort((a, b) => {
         keyB = b[0];
         keyA = a[0];
         if(keyA>keyB)
         {
             return 1;
         }
         if(keyA<keyB)
         {
             return -1;
         }
         return 0;
        
         });
         if(carEntries.length==0)
         {
            console.log("Parking Lot is Empty");
            return;
         }
         for(let i=0;i<carEntries.length;i++)
         {
             console.log(`${carEntries[i][0]}`);
         }
    
}
