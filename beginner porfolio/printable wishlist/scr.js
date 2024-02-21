var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

var myList = []; //list declared
var myListArea = document.getElementById("wishList"); //list from html

function addTheThing() {

    var theThing = document.getElementById("iWant"); //data from inputbox

    addToTheList(theThing); //sends datato function
    resetInput(theThing); //empties the inputbox

}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value); //adds parameter to end of myList
    var newListItem = document.createElement("li"); //creates a new list item
    newListItem.innerHTML = myList[myList.length - 1]; // takes last item of back-end list

    myListArea.appendChild(newListItem); //appends new item to end of list on html output

}

function resetInput(inputToReset) {
    inputToReset.value = ""; //empties inputbox
}

function printView() {
    var listPage = document.getElementById("listPage"); //outer section
    var formArea = document.getElementById("formArea"); //inner section

    formArea.style.display = "none"; /* becomes invisible */
    listPage.className = "print"; 
    myListArea.innerHTML = "";//reset
   // myList.sort();

    for (var i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>"; //makes list
    }
    //window.print();
}
