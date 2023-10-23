function vacation(count,type,day)
{
    let price=0;
    let discount=0;
    if(type=="Students")
    {
       if(day=="Friday")
       {
        price=8.45;
       }
       if(day=="Saturday")
       {
        price=9.80;
       }
       if(day=="Sunday")
       {
        price=10.46;
       }
       if(count>=30)
    {
        discount=0.15;
    }
    }
    if(type=="Business")
    {
        
       if(day=="Friday")
       {
        price=10.90;
       }
       if(day=="Saturday")
       {
        price=15.60;
       }
       if(day=="Sunday")
       {
        price=16;
       }
       if(count>=100)
       {
   count-=10;
       }
    }
    if(type=="Regular")
    {
        if(day=="Friday")
       {
        price=15;
       }
       if(day=="Saturday")
       {
        price=20;
       }
       if(day=="Sunday")
       {
        price=22.50;
       }
       if(count>=10 && count<=20)
       {
           discount=0.05;
       }
    }

    
   
   
    let totalPrice=count*price;
    totalPrice-=totalPrice*discount;
    console.log('Total price: '+ totalPrice.toFixed(2));
    
}
