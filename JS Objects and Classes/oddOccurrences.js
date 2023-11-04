function occurrences(text)
{
    let words=text.split(" ");
    let wordArray={};
    for(let i=0;i<words.length;i++)
    {
        let word=words[i].toLowerCase();
        if(wordArray.hasOwnProperty(word))
        {
            wordArray[word]++;
        }
        else
        {
           let key=word;
           wordArray[key]=1;
        }
    }
    let oddWords=[];
    for(let key in wordArray)
    {
        if(wordArray[key]%2!=0)
        {
oddWords.push(key)
        }
    }
    console.log(oddWords.join(" "));
}
