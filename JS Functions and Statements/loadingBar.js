function loadingBar(number)
{
    let result="";
    let percentage=number/10;
    for(let i=0;i<percentage;i++)
    {
        result+='%';
    }
    for(let i=0;i<10-percentage;i++)
    {
        result+='.';
    }
    if(number==100)
    {
        console.log("100% Complete!")
        console.log(`[${result}]`)
    }
    else
    {
        console.log(`${number}% [${result}]`);
        console.log("Still loading...")
    }
}
