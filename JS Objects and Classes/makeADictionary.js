function dictionary(array)
{
let dictianaryArray={};
for(let i=0;i<array.length;i++)
{
    let term=JSON.parse(array[i]);
    let entries=Object.entries(term);
    for (let [key, value] of entries) 
    {
        dictianaryArray[key]=value;
    }

}
let dictionaryEntries=Object.entries(dictianaryArray);
dictionaryEntries.sort((a, b) => {
    keyB = b[0];
    keyA = a[0];
    if(keyA>keyB)
    {
        return 1;
    }
    if(keyA<keyB)
    {
        return -1;
    }
    return 0;
   
    });
for(let j=0;j<dictionaryEntries.length;j++)
{
    console.log(`Term: ${dictionaryEntries[j][0]} => Definition: ${dictionaryEntries[j][1]}`);
}
}
dictionary([

    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    
    ])