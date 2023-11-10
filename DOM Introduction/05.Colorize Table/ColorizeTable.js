function colorize() {
    const coloredRows=document.querySelectorAll("tr:nth-child(2n)")
    for(let row of coloredRows)
    {
        row.style.background='teal';
    }
}