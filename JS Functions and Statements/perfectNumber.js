function perfect(number) {

let divis=divisors(number);
let sum=0;
for(let i=0;i<divis.length;i++)
{
sum+=divis[i];
}
if(sum==number)
{
    console.log("We have a perfect number!");
}
else
{
    console.log("It's not so perfect.");
}

    function divisors(num) {
        let res = [];
        for (let i = 1; i < num; i++) {
            if (num % i == 0) 
            res.push(i);
        }

        return res;
    }
}