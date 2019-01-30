// Global variables

var currentTotal = 0;
var lastOperation = 'start';

// EVent listeners

var container = document.getElementById('container');
document.addEventListener('keydown', function(e){
    dealWithKeyPress(e);
});

document.addEventListener('keyup', function(e){
    let keyPress = getKeyPressed(e.key);
    if (keyPress !== false && keyPress != "shift"){
        shoogleTheBox(keyPress);
    }
});

// Keyboard functions

function dealWithKeyPress(event){
    let keyPress = getKeyPressed(event.key);
    if (keyPress === false || keyPress == "shift"){
        return;
    }
    if (displayTooLong() || lastOperation == 'equals') {
        return;
    }
    shoogleTheBox(keyPress);
    addToDisplay(keyPress);
}

function getKeyPressed(eventKey){
    let symbolList = ['+', '-', 'd', '*', '=', '.', 'Shift', 'c', 'Backspace', 'Enter'];
    let idList = ['plus', 'minus', 'divide', 'multiply', 'equals', 'decimal',
        'shift', 'cancel', 'backspace', 'equals'];
    let answer = false;
    if (eventKey >= 0 && eventKey <=9){
        answer = eventKey;
    } else for (let i = 0, l = symbolList.length; i < l; i++){
        if (symbolList[i] == eventKey){
            answer = idList[i];
        }
    }
    return answer;
}

function shoogleTheBox(boxID){
    let button = document.getElementById(boxID.toString());
    button.classList.toggle('boxpressed');
    button.classList.toggle('box');
}

// These are the thinking operations

function displayTooLong(){
    let numDisplay = document.getElementById('numDisplay');
    let strDisplay = Number(numDisplay.innerText);
    return false; //(strDisplay.length < 8 ? false : true);
}

function isKeyASymbol(keyPress){
    if (keyPress >= 0 && keyPress <=9){
        return false;
    } else {
        return true;
    }
}

function itsASymbol(thisOperation){
    console.log(thisOperation);
    let lastNumber = readDisplay();
    switch (lastOperation){
        case 'start':
            currentTotal = lastNumber;
            break;
        case 'plus':
            currentTotal += lastNumber;
            break;
        case 'minus':
            currentTotal -= lastNumber;
            break;
        case 'multiply':
            currentTotal = currentTotal * lastNumber;
            break;
        case 'divide':
            currentTotal = (lastNumber == 0 ? 'divbyzero' : currentTotal / lastNumber);
            break;
        case 'equals':
            break;
        case 'decimal':
            break;
        case 'divbyzero':
            break;
    }
    switch (thisOperation){
        case "equals":
            if (currentTotal != "divbyzero"){
                printToDisplay(currentTotal%1 == 0 ? Math.floor(currentTotal) : currentTotal.toFixed(8));
            } else {
                printToDisplay(currentTotal);
            }
            lastOperation = "ended";
            currentTotal = 0;
            break;
        case "decimal":
            addADecimal();
            break;
        case "cancel":
            clearDisplay();
            currentTotal = 0;
            lastOperation = "start";
            break;
        case "backspace":
            chopOffLastCharacter();
            break;
        default:
            lastOperation = thisOperation;
            clearDisplay();    
    }
}


function itsANumber(key){
    let dispBox = document.getElementById('numDisplay');
    let currentDisplay = dispBox.innerText;
    //if (currentDisplay.length == 1 && currentDisplay == "0"){
    if (currentDisplay == "0" && lastOperation != "ended"){
        dispBox.innerText = key.toString();
    } else if (lastOperation == "ended"){
        lastOperation = "start";
        dispBox.innerText = key.toString();
    } else {
        dispBox.innerText += key.toString();
    }
}
// These functions operate the numeric display

function addToDisplay(keyPressed){
    if (isKeyASymbol(keyPressed)){
        itsASymbol(keyPressed);
    } else {
        itsANumber(keyPressed)
    }
}

function readDisplay(){
    displayBox = document.getElementById('numDisplay');
    return Number(numDisplay.innerText);
}

function chopOffLastCharacter(){
    let strDisplay = readDisplay().toString();
    if (strDisplay.length > 1){
        let newDisplay = strDisplay.slice(0, strDisplay.length - 1);
        printToDisplay(newDisplay);
    } else{
        printToDisplay(0);
    }
}

function printToDisplay(thisNumber){
    let numDisplay = document.getElementById('numDisplay');
    numDisplay.innerText = thisNumber;
}

function clearDisplay(){
    let numDisplay = document.getElementById('numDisplay');
    numDisplay.innerText = 0;
}

function addADecimal(){
    let displayBox = document.getElementById('numDisplay');
    let currentReading = displayBox.innerText;
    if (currentReading.includes(".") != true){
        displayBox.innerText = currentReading + ".";
    }
}

// These are the actual operation buttons

function cancelOperation(){
    currentTotal = 0;
    lastOperation = 'start';
    clearDisplay();
}