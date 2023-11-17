function race(input)
{
 let numberOfRacers=Number(input[0]);
 let racers=[];
 for(let i=0;i<numberOfRacers;i++)
 {
    let racerInfo=input[i+1].split("|");
    let racer={name:racerInfo[0],fuel:Number(racerInfo[1]),position:Number(racerInfo[2])};
    racers.push(racer);
 }
  let index=numberOfRacers+1;
  while(true)
  {
    let command=input[index].split(" - ");
    if(command[0]=="Finish")
    {
        break;
    }
    let action=command[0];
    if(action=="StopForFuel")
    {
        let name=command[1];
        let minFuel=Number(command[2]);
        let newPosition=Number(command[3]);
        for(let i=0;i<racers.length;i++)
        {
            if(name==racers[i].name)
            {
                if(racers[i].fuel<minFuel)
                {
                    console.log(`${name} stopped to refuel but lost his position, now he is ${newPosition}.`);
                    racers[i].position=newPosition;
                }
                else
                {
                    console.log(`${name} does not need to stop for fuel!`);
                }
            }
        }
    }
    if(action=="Overtaking")
    {
        let rider1=command[1];
        let rider2=command[2];
        let racer1Index=0;
        let racer2Index=0;
        for(let i=0;i<racers.length;i++)
        {
           if(racers[i].name==rider1)
           {
            racer1Index=i;
           }
           if(racers[i].name==rider2)
           {
            racer2Index=i;
           }
        }
        if(racers[racer1Index].position<racers[racer2Index].position)
        {
            let swap=racers[racer1Index].position;
            racers[racer1Index].position=racers[racer2Index].position;
            racers[racer2Index].position=swap;
            console.log(`${rider1} overtook ${rider2}!`)
        }
    }
    if(action=="EngineFail")
    {
        let name=command[1];
        let laps=command[2];
       for(let i=0;i<racers.length;i++)
       {
        if(racers[i].name==name)
        {
            racers.splice(i,1)
        }
       }
    console.log(`${name} is out of the race because of a technical issue, ${laps} laps before the finish.`);
    }

    index++;
  }
  for(let i=0;i<racers.length;i++)
  {
    console.log(`${racers[i].name}
    Final position: ${racers[i].position}`)
  }

}
race(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);