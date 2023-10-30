function addAndSubtract(num1,num2,num3)
{
    function sum(number1,number2)
    {
        return number1+number2;
    }
    let add=sum(num1,num2);
    function subtract(add,number3)
    {
        console.log(add-number3);
    }
    subtract(add,num3);

}
