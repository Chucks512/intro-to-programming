alert("tell us about your favourite car...Okay?") //announcement to user
let dreamCar = {//object header + instantiation via prompt
    make: prompt("make?"), //"Ford",
    model: prompt("model?"), //"Ranger", 
    color: prompt("color?"), //"blue",
    year: prompt("model year?"), //"2023", 
    bodystyle: prompt("body style?"), //"Double_Cab", 
    price: prompt("price?") //"1.2M" 
};

document.getElementById("pricetag").innerHTML = dreamCar.price;//passes obj attribute to html

document.getElementById("modelyear").innerHTML = dreamCar.year;//passes "year"

document.getElementById("body").style.backgroundColor = dreamCar.color; //sets chosen color

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model; //concatenation used
