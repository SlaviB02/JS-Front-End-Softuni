function match(text)
{
    let reg=/#[A-Za-z]+/g
    let matches=text.match(reg);
    for(let i=0;i<matches.length;i++)
    {
        console.log(matches[i].substring(1));
    }
}
match('Nowadays everyone uses # to tag a #special word in #socialMedia');