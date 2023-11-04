function store(current, ordered) {
    let items = [];
    let names = [];
    let quantities = [];
    for (let i = 0; i < current.length; i += 2) {
        names.push(current[i]);
    }
    for (let i = 1; i < current.length; i += 2) {
        quantities.push(current[i]);
    }
    for (let i = 0; i < names.length; i++) {
        let item = { name: names[i], quantity: Number(quantities[i]) };
        items.push(item);
    }

    names = [];
    quantities = [];
    for (let i = 0; i < ordered.length; i += 2) {
        names.push(ordered[i]);
    }
    for (let i = 1; i < ordered.length; i += 2) {
        quantities.push(ordered[i]);
    }


    for (let i = 0; i < names.length; i++) {
        let flag = true;
        let index = 0;
        for (let j = 0; j < items.length; j++) 
        {
            if (names[i] == items[j].name) {
                flag = false;
                index = j;
                break;
            }
        }
        if (flag == false) {
            items[index].quantity += Number(quantities[i]);
        }
        else {
            let item = { name: names[i], quantity: Number(quantities[i]) };
            items.push(item);
        }

    }

    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i].name} -> ${items[i].quantity}`)
    }

}
