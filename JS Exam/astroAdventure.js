function adventure(input) {
    let numberOfAstronauts = Number(input[0]);
    let astronauts = [];
    for (let i = 0; i < numberOfAstronauts; i++) {
        let [name, oxygen, energy] = input[i + 1].split(" ");
        let astronaut = { name: name, oxygenLevel: Number(oxygen), energyReserve: Number(energy) };
        astronauts.push(astronaut);
    }
    let index = numberOfAstronauts + 1;
    while (true) {
        let command = input[index].split(" - ");
        if (command == "End") {
            break;
        }
        if (command[0] == "Explore") {
            let name = command[1];
            let energyNeeded = Number(command[2]);
            let astronaut = astronauts.find((element) => element.name == name);
            if (astronaut.energyReserve > energyNeeded) {
                astronaut.energyReserve -= energyNeeded;
                console.log(`${name} has successfully explored a new area and now has ${astronaut.energyReserve} energy!`)
            }
            else {
                console.log(`${name} does not have enough energy to explore!`)
            }
        }
        if(command[0]=="Refuel")
        {
            let name = command[1];
            let amount = Number(command[2]);
            let astronaut = astronauts.find((element) => element.name == name);
            let refueled=0;
            if(astronaut.energyReserve+amount>200)
            {
                refueled=200-astronaut.energyReserve;
                astronaut.energyReserve=200;
            }
            else
            {
                astronaut.energyReserve+=amount;
                refueled=amount;
            }
            console.log(`${name} refueled their energy by ${refueled}!`)
        }
        if(command[0]=="Breathe")
        {
            let name = command[1];
            let amount = Number(command[2]);
            let astronaut = astronauts.find((element) => element.name == name);
            let oxygen=0;
            if(astronaut.oxygenLevel+amount>100)
            {
                  oxygen=100-astronaut.oxygenLevel;
                astronaut.oxygenLevel=100;
            }
            else
            {
                astronaut.oxygenLevel+=amount;
                oxygen=amount;
            }
            console.log(`${name} took a breath and recovered ${oxygen} oxygen!`);
        }
        index++;
    }
    for(let astr of astronauts)
    {
        console.log(`Astronaut: ${astr.name}, Oxygen: ${astr.oxygenLevel}, Energy: ${astr.energyReserve}`)
    }
}
adventure([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End'])