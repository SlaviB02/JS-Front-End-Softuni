function word(input,text)
{
    let words=input.split(", ")
    for(let i=0;i<words.length;i++)
    {
        let size=words[i].length;
        let replace="";
        for(let j=0;j<size;j++)
        {
            replace+='*';
        }
        text=text.replace(replace,words[i]);
    }
    console.log(text);
}
word('great, learning',

'softuni is ***** place for ******** new programming languages')