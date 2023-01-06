(function() {
  "use strict";

  /*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

  let lengthAnswer = document.getElementById("length");
  let volumeAnswer = document.getElementById("volume");
  let massAnswer = document.getElementById("mass");

// Adding the event listener with a anonymous function

  document.addEventListener("submit", function(event) {
    // prevent default form submission behavior
    event.preventDefault();

    let unit = parseFloat(document.getElementById("unit").value);

    if (unit) {

      // Convert Length

      function length() {

        const meters = (unit * 3.281).toFixed(3);
        const feet = (unit / 3.281).toFixed(3);
        lengthAnswer.innerHTML = `<h4>Length (Meter/Feet)</h4> <p>${unit} meters = ${meters} feet | ${unit} feet = ${feet} meters</p>`
      }

      length();

      // Convert Volume

      function volume() {

        const litres = (unit * 0.264).toFixed(3);
        const gallons = (unit / 0.264).toFixed(3);
        volumeAnswer.innerHTML = `<h4>Volume (Litres/Gallons)</h4> <p>${unit} litres = ${litres} gallons | ${unit} gallons = ${gallons} litres</p>`

      }

      volume();

      // Convert Mass

      function mass() {

        const kilograms = (unit * 2.204).toFixed(3);
        const pounds = (unit / 2.204).toFixed(3);
        massAnswer.innerHTML = `<h4>Mass (Kilograms/Pounds)</h4> <p>${unit} kilos = ${kilograms} pounds | ${unit} pounds = ${pounds} kilograms</p>`

      }

      mass();

      document.getElementById("unit").value = "";

    }
    // Error Message

    else {
      document.getElementById("convert").innerHTML += "<p>Please enter a number!</p>"
    }


  });



})();