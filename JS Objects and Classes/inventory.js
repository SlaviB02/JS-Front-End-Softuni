function inventory(array) {
    let heroArray = [];
    for (let i = 0; i < array.length; i++) {
        let heroInfo = array[i].split(" / ");
        let name = heroInfo[0];
        let level = Number(heroInfo[1]);
        let items = heroInfo[2].split(", ");
        let hero = { heroName: name, heroLevel: level, heroItems: items };
        heroArray.push(hero);
    }
 
    heroArray.sort((a, b) => {

        if (a.heroLevel > b.heroLevel) {
            return 1;
        }
        if (a.heroLevel < b.heroLevel) {
            return -1;
        }

        return 0;
    }

    );
    for(let i=0;i<heroArray.length;i++)
    {
        console.log(`Hero: ${heroArray[i].heroName}`);
        console.log(`level => ${heroArray[i].heroLevel}`)
        console.log(`items => ${heroArray[i].heroItems.join(", ")}`);
    }

}
