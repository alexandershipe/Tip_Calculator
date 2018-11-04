

//Custom calculateTip function
function calculateTip() {
    //store data of the inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //Validate Data
    if(billAmount === "" || serviceQuality == 0){
        return window.alert("Please enter valid values for bill amount and service quality.");        
    }

    if(numPeople === "" || numPeople <= 1){
        numPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculation
    var total = (billAmount * serviceQuality)/numPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);

    //Final display of tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hide the total tip amount on initial load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking button calls the Button click function
document.getElementById("calculate").onclick = function() {calculateTip();};