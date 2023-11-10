function sumTable() {


let result=document.getElementById("sum");
    let prices=document.querySelectorAll("td:nth-child(2n)");
    let sum=0;
    for(let i=0;i<prices.length;i++)
    {
        sum+=Number(prices[i].textContent);
    }
    result.textContent=sum;
}