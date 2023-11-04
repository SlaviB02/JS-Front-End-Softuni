function employees(array)
{
    let listEmployees=[];
    for(let i=0;i<array.length;i++)
    {
let person={name:array[i],number:array[i].length};
listEmployees.push(person);
    }
    for(let i=0;i<listEmployees.length;i++)
    {
        console.log(`Name: ${listEmployees[i].name} -- Personal Number: ${listEmployees[i].number}`);
    }
}
