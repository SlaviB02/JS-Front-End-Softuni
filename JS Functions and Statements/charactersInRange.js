function charactersInRange(firstChar,secondChar)
{
    let array=[];
    if(firstChar.charCodeAt()>secondChar.charCodeAt())
    {
        let swap=firstChar;
        firstChar=secondChar;
        secondChar=swap;
    }
    for(let i=firstChar.charCodeAt()+1;i<secondChar.charCodeAt();i++)
    {
        let character=String.fromCharCode(i);
        
        array.push(character);
    }
  console.log(array.join(" "));
}
