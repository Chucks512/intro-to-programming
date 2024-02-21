//we`ll record, but first ask Arnold why the functions fire themselves
var item1;
var item2;
var item3;//past 3 lines are creation of container variables
document.getElementById("changeList").addEventListener("click", newList);

function newList() {//function header and body below
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");//past 3 lines are assignment of container variables from prompts
    updateList();
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;//past 3 lines pass container variables to HTML objects
}
