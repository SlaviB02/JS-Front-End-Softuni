function search(text)
{
    let reg=/(?=[A-Z])/g
    console.log(text.split(reg).join(", "));
}
search('SplitMeIfYouCanHaHaYouCantOrYouCan');