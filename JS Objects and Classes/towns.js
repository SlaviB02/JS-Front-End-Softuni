function towns(array)
{
    for(let i=0;i<array.length;i++)
    {
        let townInfo=array[i].split(" | ");
        let town={town:townInfo[0],latitude:Number(townInfo[1]).toFixed(2),longitude:Number(townInfo[2]).toFixed(2)};
        console.log(town);
    }
}
