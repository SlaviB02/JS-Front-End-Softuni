function factorialDivison(num1,num2)
{
    let num1Factorail=factorail(num1);
    let num2Factorail=factorail(num2);
    console.log((num1Factorail/num2Factorail).toFixed(2));
    function factorail(number)
    {
        if(number==1)
        {
            return 1;
        }
        else
        {
            return number*factorail(number-1);
        }
    }
}
