const displayEl = document.querySelector(".display-result");
const numberEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const deleteEl = document.querySelector(".delete");
const resetEl = document.querySelector(".reset");
const equalEl = document.querySelector(".equal");
const displayAnnexeEl = document.querySelector(".display-annexe");
const displayHistoryEl = document.querySelector(".display-history");


let result = null; 
let displayResult = '';
let numHistory = '';
let haveDot = false;
let lastOperation = '';

numberEl.forEach(number =>{
    number.addEventListener('click', (e) =>{
        if (e.target.innerText === '.' && haveDot === false){
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot === true) {
            return;
        }
        displayResult += e.target.innerText;
        displayEl.innerText = displayResult;
    })
})
operationEl.forEach(operation=>{
    operation.addEventListener('click', (e) =>{
        if (!displayResult) return;
        haveDot = false;
        const currentOperation = e.target.innerText;
        if (!result){
            result = parseFloat(displayResult);
        } else if (result && displayResult && lastOperation){
            mathOperation();
        }
        setAll(currentOperation);
        lastOperation = currentOperation;
    })

})
function mathOperation(){
    if (lastOperation === '+'){
        result = result + parseFloat(displayResult);
    }else if (lastOperation === '-'){
        result = result - parseFloat(displayResult);
    } else if (lastOperation === '/'){
        result = result / parseFloat(displayResult);
    } else if (lastOperation === 'x'){
        result = result * parseFloat(displayResult);
    }
}
function setAll(name){
    numHistory += displayResult + ' ' + name + ' ';
    displayHistoryEl.innerText = numHistory;
    displayAnnexeEl.innerText = result;
    displayResult = '';
    displayEl.innerText = '';
}
resetEl.addEventListener('click', (e) => {
    displayAnnexeEl.innerText = '0';
    displayEl.innerText ='0';
    displayHistoryEl.innerText = '0';
    numHistory = '';
    displayResult = '';
    result = null ; 
})
deleteEl.addEventListener('click', (e) =>{
    displayEl.innerText = '';
    displayResult = '';
})
equalEl.addEventListener('click', (e) =>{
    if (!result || !displayResult) return;
    haveDot = false;
    mathOperation();
    numHistory += displayResult + ' = '; 
    displayHistoryEl.innerText = numHistory;
    displayResult = result;
    displayEl.innerText = displayResult;
    result = null;
    displayAnnexeEl.innerText = '';
    numHistory = '';
})
document.addEventListener('keydown', (e) => {
        numberKeyboard(e.key);
        operationKeyboard(e.key);
        equalKeyboard(e.key);
        if (e.key === '*'){
           operationKeyboard('x'); 
        }
        if (e.key === 'enter'){
            equalKeyboard(e.key);
        }
    
})
function numberKeyboard (key) {
    numberEl.forEach(number => {
       if( number.innerText === key){
       number.click();
       }
    })

}
function operationKeyboard (key){
    operationEl.forEach(operation => {
        if(operation.innerText === key)
        operation.click();
    })

}
function equalKeyboard (key){
    if (equalEl.innerText === key ){
        equalEl.click();
    }
}







/* if (e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' ||
        e.key === '0' )*/