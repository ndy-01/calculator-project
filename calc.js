// Global variables

var currentTotal = 0;

// EVent listeners

var container = document.getElementById('container');
document.addEventListener('keydown', function(e){
    dealWithKeyPress(e);
});

document.addEventListener('keyup', function(e){
    let keyPress = getKeyPressed(e.key);
    if (keyPress != false && keyPress != "shift"){
        shoogleTheBox(getKeyPressed(e.key));
    }
});

// Keyboard functions

function dealWithKeyPress(event){
    let keyPress = getKeyPressed(event.key);
    if (keyPress === false || keyPress == "shift"){
        return;
    }
    if (displayTooLong()) {
        return;
    }
    shoogleTheBox(keyPress);
    addToDisplay(keyPress);
}

function getKeyPressed(eventKey){
    let symbolList = ['+', '-', '/', '*', '=', '.', 'Shift', 'c'];
    let idList = ['plus', 'minus', 'divide', 'multiply', 'equals', 'decimal', 'shift', 'cancel'];
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
    var numDisplay = document.getElementById('numDisplay');
    var strDisplay = numDisplay.innerText;
    return (strDisplay.length < 8 ? false : true);
}

function isKeyASymbol(keyPress){
    if (keyPress >= 0 && keyPress <=9){
        return false;
    } else {
        return true;
    }
}

function itsASymbol(keyPressed){
    let runningTotal;
    switch (keyPressed){
        case 'equals':
            break;
        case 'plus':
            plusOperation();
            break;
        case 'cancel':
            cancelOperation();
            break;
        default:
            alert("It's all fucked!");
            break;
    }
}

function itsANumber(key){
    let dispBox = document.getElementById('numDisplay');
    let currentDisplay = dispBox.innerText;
    if (currentDisplay.length == 1 && currentDisplay == "0"){
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
    return numDisplay.innerText;
}

function printToDisplay(thisNumber){
    let numDisplay = document.getElementById('numDisplay');
    numDisplay.innerText = currentTotal;
}

function clearDisplay(){
    let numDisplay = document.getElementById('numDisplay');
    numDisplay.innerText = 0;
}

// These are the actual operation buttons

function cancelOperation(){
    currentTotal = 0;
    clearDisplay();
}

function plusOperation(){
    let enteredNumber;

    enteredNumber = Number(document.getElementById('numDisplay').innerText);
    currentTotal += enteredNumber;
    clearDisplay();
}

function equalsOperation(){
    printToDisplay(currentTotal);
    currentTotal = 0;
}