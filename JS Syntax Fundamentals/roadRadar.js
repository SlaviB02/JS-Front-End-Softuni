function radar(speed,place)
{
    let limit=0;
    if(place=="motorway")
    {
        limit=130;
    }
   else if(place=="interstate")
    {
        limit=90;
    }
    else if(place=="city")
    {
        limit=50;
    }
   else if(place=="residential")
    {
        limit=20;
    }

    if(speed<=limit)
    {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
    else
    {
      let status="";
      let diff=speed-limit;
      if(diff<=20)
      {
        status="speeding";
      }
      else if( diff>20 && diff<=40)
      {
status="excessive speeding";
      }
      else
      {
        status="reckless driving";
      }
      console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
radar(120,'interstate');