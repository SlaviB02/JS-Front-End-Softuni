function cooking(number,a,b,c,d,e)
{
    let array=[a,b,c,d,e];
    for(let i=0;i<5;i++)
    {
        if(array[i]=="chop")
        {
            number/=2;
        }
        else if(array[i]=="dice")
        {
            number=Math.sqrt(number);
        }
        else if(array[i]=="spice")
        {
            number+=1;
        }
        else if(array[i]=="bake")
        {
            number*=3;
        }
        else if(array[i]=="fillet")
        {
            number=number-number*0.20;
        }
        console.log(number);
    }
}
