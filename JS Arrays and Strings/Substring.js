function substring(word,text)
{
   let textArray=text.toLowerCase().split(" ");
   let flag=false;
   for(let i=0;i<textArray.length;i++)
   {
if(textArray[i]==word)
{
   console.log(word);
   flag=true;
   break;
}

}
if(flag!=true)
{
   console.log(`${word} not found!`);
}
}
substring('pythOn',

'JavaScript is the best programming language');