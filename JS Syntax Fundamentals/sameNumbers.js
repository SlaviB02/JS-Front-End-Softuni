function sameNumbers(number)
{
    let sum=0;
    let firstDigit=number%10;
    let flag=true;
    while(number>0)
    {
        let digit=number%10;
        if(digit!=firstDigit)
        {
            flag=false;
        }
        number=Math.floor(number/10);
        sum+=digit;
    }
    console.log(flag);
    console.log(sum);
}
