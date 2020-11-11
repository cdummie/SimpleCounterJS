function moveUp()
{   
    let i = parseInt(document.getElementById("number").innerHTML);
    
    i++;
    i = String(i);
    document.getElementById("number").innerHTML = i;


}

function moveDown()
{   
    let i = parseInt(document.getElementById("number").innerHTML);

    i--;
    i = String(i);

    document.getElementById("number").innerHTML = i;
}

console.log("Pozz");