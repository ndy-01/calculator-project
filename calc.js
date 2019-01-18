var container = document.getElementById('container');
document.addEventListener('keydown', function(e){
    dealWithKeyPress(e);
});

document.addEventListener('keyup', function(e){
    let key = e.key;
    let button = document.getElementById(key.toString());
    button.classList.toggle('boxpressed');
    button.classList.toggle('box');
    //console.log(button);
});

function getKeyPressed(eventKey){
    let symbolList = ['+', '-', '/', '*', '=', '.'];
    let answer = false;
    if (eventKey >= 0 && eventKey <=9){
        answer = eventKey;
    } else for (let i = 0, l = symbolList.length; i < l; i++){
        if (symbolList[i] == eventKey){
            answer = symbolList[i];
        }
    }
    return answer;
}

function addToDisplay(k){
    if (isKeyASymbol(k)){

    } else {
        itsANumber(k);
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

function dealWithKeyPress(event){
    console.log(event);
    let key = getKeyPressed(event.key);
    let button = document.getElementById(key.toString());
    button.classList.toggle('boxpressed');
    button.classList.toggle('box');
    addToDisplay(key);
}

function isKeyASymbol(key){
    if (key >= 0 && key <=9){
        return false;
    } else {
        return true;
    }
}