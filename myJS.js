/*
* Excercise 1
*
*/

const box = document.getElementById("color-block");
box.addEventListener('click', changeColor);
const colorName = document.getElementById('color-name')
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor() {
    //Write a condition determine what color it should be changed to
    if(colorName.innerHTML == '#F08080') {
        //change the background color using JS
        box.setAttribute('style','background-color:#61AFDE')
        //Change the text of the color using the span id color-name
        colorName.textContent='#61AFDE'
    }
    else {
        //change the background color using JS
        box.setAttribute('style','background-color:#F08080')
        //Change the text of the color using the span id color-name
        colorName.textContent='#F08080'

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.getElementById('convertbtn')
button.addEventListener('click', convertTemp)
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp() {
    //Calculate the temperature here
    var input = document.querySelector("#f-input").value;
    var output = ((input-32)*5)/9;

    //Send the calculated temperature to HTML
    document.querySelector("#c-output").innerHTML = output;
}


