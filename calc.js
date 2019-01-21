var container = document.getElementById('container');
document.addEventListener('keydown', function(e){
    dealWithKeyPress(e);
});

document.addEventListener('keyup', function(e){
    let button = document.getElementById(e.key);
    button.classList.toggle('boxpressed');
    button.classList.toggle('box');
});

function dealWithKeyPress(event){
    let key = getKeyPressed(event.key);
    if (key === false){
        alert("not a symbol");
        return};
    if (displayTooLong()) {
        return;
    };


    shoogleTheBox(key);
    addToDisplay(key);
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
            alert('is a symbol');
            answer = symbolList[i];
        }
    }
    return answer;
}

function shoogleTheBox(boxID){
    let button = document.getElementById(boxID.toString());
    button.classList.toggle('boxpressed');
    button.classList.toggle('box');
}

function addToDisplay(k){
    if (isKeyASymbol(k)){
        itsASymbol(k);
    } else {
        itsANumber(k);
    }
}

function isKeyASymbol(key){
    if (key >= 0 && key <=9){
        return false;
    } else {
        return true;
    }
}

function itsASymbol(x){
    let symbol = x.key;
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