function encodeAndDecodeMessages() {
   let encodeButton=document.querySelectorAll("div button")[0];
   let decodeButton=document.querySelectorAll("div button")[1];
   encodeButton.addEventListener('click',encodeMessage)
   decodeButton.addEventListener('click',decodeMessage);
   function encodeMessage(e)
   {
    let message=e.target.parentNode.children[1].value;
    let reciverArea=document.querySelectorAll("textarea")[1];
    let codedMessage="";
    for(let i=0;i<message.length;i++)
    {
        let number=message.charCodeAt(i);
        number++;
        codedMessage+=String.fromCharCode(number);
    }
    reciverArea.value=codedMessage;
    document.querySelectorAll("textarea")[0].value=''

   }
 function decodeMessage(e)
 {
    let message=document.querySelectorAll("textarea")[1].value;
    let decodedMessage="";
    for(let i=0;i<message.length;i++)
    {
        let number=message.charCodeAt(i);
        number--;
        decodedMessage+=String.fromCharCode(number);
    }
    document.querySelectorAll("textarea")[1].value=decodedMessage;
 }
}