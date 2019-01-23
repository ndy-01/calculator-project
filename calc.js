
var container = document.getElementById('container');
document.addEventListener('keydown', function(e){
    dealWithKeyPress(e);
});

document.addEventListener('keyup', function(e){
    shoogleTheBox(getKeyPressed(e.key));
});

function dealWithKeyPress(event){
    let keyPress = getKeyPressed(event.key);
    if (keyPress === false){
        return};
    if (displayTooLong()) {
        return;
    };
    shoogleTheBox(keyPress);
    addToDisplay(keyPress);
}

function displayTooLong(){
    var numDisplay = document.getElementById('numDisplay');
    var strDisplay = numDisplay.innerText;
    return (strDisplay.length < 8 ? false : true);
}

function getKeyPressed(eventKey){
    let symbolList = ['+', '-', '/', '*', '=', '.', 'Shift'];
    let idList = ['plus', 'minus', 'divide', 'multiply', 'equals', 'decimal', 'shift'];
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

function addToDisplay(keyPressed){
    if (isKeyASymbol(keyPressed)){
        itsASymbol(keyPressed);
    } else {
        itsANumber(keyPressed)
    }
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
            alert();
            getRunningTotal();
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

function getRunningTotal(){
    displayBox = document.getElementById('displayBox');
    return displayBox.innerText;
}