function attachEventsListeners() {
let convertButtons=document.querySelectorAll("input");
for(let i=1;i<convertButtons.length;i+=2)
{
    convertButtons[i].addEventListener('click',convert);
}
function convert(e)
{
   let input=e.target.parentNode.children[1].value;
   let name=e.target.parentNode.children[0].innerHTML.split(":")[0];
   let days=0;
   let hours=0;
   let minutes=0;
   let seconds=0;
   if(name=="Days")
   {
     hours=input*24;
     minutes=hours*60;
     seconds=minutes*60;
     convertButtons[2].value=hours;
     convertButtons[4].value=minutes;
     convertButtons[6].value=seconds;
   }
   if(name=="Hours")
   {
    days=input/24;
    minutes=input*60;
    seconds=minutes*60;
    convertButtons[0].value=days;
    convertButtons[4].value=minutes;
    convertButtons[6].value=seconds;
   }
   if(name=="Minutes")
   {
    seconds=input*60;
    hours=input/60;
    days=hours/24;
    convertButtons[0].value=days;
    convertButtons[2].value=hours;
    convertButtons[6].value=seconds;
   }
   if(name=="Seconds")
   {
    minutes=input/60;
    hours=minutes/60;
    days=hours/24;
    convertButtons[0].value=days;
    convertButtons[2].value=hours;
    convertButtons[4].value=minutes;
   }
}
}