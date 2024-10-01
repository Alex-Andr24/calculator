const btn0 = document.querySelector('#zero');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const btnPlus = document.querySelector('#plus');
const btnMinus = document.querySelector('#minus');
const btnPerform = document.querySelector('#perform');
const btnMultiplication = document.querySelector('#multiplication');
const btnDivision = document.querySelector('#division');
const btnReset = document.querySelector('#reset');
const btnConsole = document.querySelector('#console');
const btnComma = document.querySelector('#comma')
let numberOne = ('');
let numberTwo = ('');
let action = (false);
let actionPlus = (false);
let actionMinus = (false);
let actionDivision = (false);
let actionMultiplication = (false);
let commaOne = false;
let commaTwo = false;
let result = ('0');
let negativityOne = false;
let negativityTwo = false;
let commaOneUse = false;
let commaTwoUse = false;
let numberOneAfterComma = ('');
let denominatorNumberOneAfterComma = 1;
let numberTwoAfterComma = ('');
let denominatorNumberTwoAfterComma = 1;
let figureRound = '';
let comparison = '0';

function visualization(){
    visNO.innerText = numberOne;
    visNT.innerText = numberTwo;
    if (commaOne){
        visNO.innerText = `${numberOne}.${numberOneAfterComma}`};
    if (commaTwo){
        visNT.innerText = `${numberTwo}.${numberTwoAfterComma}`};
    if (actionPlus){
        visS.innerText = '+';
    } else if (actionMinus){
        visS.innerText = '-';
    } else if (actionDivision){
        visS.innerText = ':';
    } else if (actionMultiplication){
        visS.innerText = '*';
    } else {
        visS.innerText = '';
    };
    if (numberOne === '0'){
        visNO.innerText = '0';
    };
    if (action == false && numberOne === '0') {
        visNT.innerText = '';
    };
    if (negativityOne){
        visNOnegativity.innerText = '-'
    };
    if (negativityOne == false){
        visNOnegativity.innerText = ''
    };
    if (negativityTwo){
        visNTnegativity.classList.remove('none')
    };
    if (negativityTwo == false){
        visNTnegativity.classList.add('none')
    };
};
const btnAll = document.querySelectorAll('button');
btnAll.forEach(()=>this.addEventListener('click', visualization)
);

function set(){
    if (action == false&&commaOne == false){
        numberOne += this.innerText;
        return numberOne;
    }else if(action == false &&commaOne){
        numberOneAfterComma += this.innerText;
        denominatorNumberOneAfterComma *= 10;
        return numberOneAfterComma, denominatorNumberOneAfterComma;
    }else if(action&&commaTwo == false){
        numberTwo += this.innerText;
        return numberTwo;
    } else if (action&&commaTwo){
        numberTwoAfterComma += this.innerText;
        denominatorNumberTwoAfterComma *= 10;
        return numberOneAfterComma, denominatorNumberTwoAfterComma;
    }
};
const btnFigureAll = [btn0, btn1, btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]
btnFigureAll.forEach((item, i)=>{
    item.addEventListener('click', set)
});

btnComma.addEventListener('click',()=>{
    if (action == false && commaOne == false && commaOneUse == false){
        commaOne = true;
    } else if (action == false && commaOne){
        commaOne = false;
    }
});

btnComma.addEventListener('click',()=>{
    if (action&&commaTwo == false&&commaTwoUse == false){
        commaTwo = true;
    } else if (action&&commaTwo&&commaTwoUse == false){
        commaTwo = false;
    }
});

inputvalueRounding.addEventListener('input',()=>{
    raundingDescr.classList.add('raunding-descr_deactivated');
    acceptValueRauding.classList.remove('raunding-accept_deactivated');
    if (inputvalueRounding.value >= 0){
        inputvalueRounding.classList.add('raunding-input_green');
        inputvalueRounding.classList.remove('raunding-input_red');
        acceptValueRauding.classList.remove('raunding-accept_yellow');
        acceptValueRauding.innerText = 'Принять настройку'
        acceptValueRauding.classList.add('raunding-input_green')
    } else if (inputvalueRounding.value < 0){
        acceptValueRauding.innerText = 'Вернуть по умолчанию'
        acceptValueRauding.classList.add('raunding-accept_yellow')
        inputvalueRounding.classList.remove('raunding-input_green');
        inputvalueRounding.classList.add('raunding-input_red');
    }
});

acceptValueRauding.addEventListener('click',()=>{
    if (acceptValueRauding.innerText === 'Принять настройку'){
        acceptValueRauding.innerText = "Вернуть по умолчанию";
        acceptValueRauding.classList.remove('raunding-input_green');
        inputvalueRounding.classList.remove('raunding-input_green');
        figureRound = inputvalueRounding.value;
    } else if (acceptValueRauding.innerText === "Вернуть по умолчанию"){
        figureRound.value = '';
        inputvalueRounding.value = 'по умолчанию'
        inputvalueRounding.classList.remove('raunding-input_green')
        inputvalueRounding.classList.remove('raunding-input_red')
        acceptValueRauding.classList.remove('raunding-accept_yellow')
        acceptValueRauding.classList.remove('raunding-input_green')
    }
})

btnMinus.addEventListener('click',()=>{
    if (action == false && numberOne === '' && negativityOne == false ) {
        negativityOne = true;
    } else if ( action == false && numberOne === '' && negativityOne) {
        negativityOne = false;
    } 
});

btnMinus.addEventListener('click',()=>{
    if (action && numberTwo === '' && negativityTwo == false ) {
        negativityTwo = true;
    } else if (action && numberTwo === '' && negativityTwo) {
        negativityTwo = false;
    }
});

btnMinus.addEventListener('click',()=>{
    if (action == false && numberOne !== '') {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    }
});

btnMinus.addEventListener('click',()=>{
    if (action && numberTwo > 0) {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    }
});

btnPlus.addEventListener('click',()=>{
    if (negativityTwo){
        negativityTwo = false
    }
});

btnPlus.addEventListener('click',()=>{
    action = true;
    actionPlus = true;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
});

btnDivision.addEventListener('click',()=>{
    action = true;
    actionPlus = false;
    actionMinus = false;
    actionDivision = true;
    actionMultiplication = false;
});

btnMultiplication.addEventListener('click',()=>{
    action = true;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = true;
});

perform.addEventListener('click',()=>{
    if (negativityOne){
        numberOne = -numberOne;
        return numberOne;
    };
});
perform.addEventListener('click',()=>{
    if (negativityTwo){
        numberTwo = -numberTwo;
        return numberTwo;
    }
});
function afterCalculate(){
    action = false;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
    negativityOne = false;
    negativityTwo = false;
    numberTwo = ('');
    result = numberOne;
    commaOne = false;
    commaTwo = false;
    commaOneUse = true;
    commaTwoUse = false;
    numberOneAfterComma = ('');
    denominatorNumberOneAfterComma = 1;
    numberTwoAfterComma = ('');
    denominatorNumberTwoAfterComma = 1;
    if (figureRound > '0' || figureRound === '0' ){
        numberOne = numberOne.toFixed(figureRound)
    }    
    return numberOne;
}
perform.addEventListener('click',()=>{
    if (actionPlus&&action){
        numberOne = (numberOne + numberOneAfterComma) /denominatorNumberOneAfterComma + (numberTwo + numberTwoAfterComma) / denominatorNumberTwoAfterComma;
        afterCalculate();
    } else if(actionMinus&&action){
        numberOne = (numberOne + numberOneAfterComma) /denominatorNumberOneAfterComma - (numberTwo + numberTwoAfterComma) / denominatorNumberTwoAfterComma;
        afterCalculate();
    } else if (actionDivision&&action){
        numberOne = ((numberOne + numberOneAfterComma) /denominatorNumberOneAfterComma) / ((numberTwo + numberTwoAfterComma) / denominatorNumberTwoAfterComma);
        afterCalculate();
    } else if (actionMultiplication&&action){
        numberOne = ((numberOne + numberOneAfterComma) /denominatorNumberOneAfterComma) * ((numberTwo + numberTwoAfterComma) / denominatorNumberTwoAfterComma);
        afterCalculate();
    }
});

btnReset.addEventListener('click',()=>{
    numberOne = ('');
    numberTwo = ('');
    result = '';
    action = false;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
    negativityOne = false;
    negativityTwo = false;
    negativityOneAfterPerfom = false;
    commaOne = false;
    commaTwo = false;
    commaOneUse = false;
    commaTwoUse = false;
    numberOneAfterComma = '';
    denominatorNumberOneAfterComma = 1;
    numberTwoAfterComma = '';
    denominatorNumberTwoAfterComma = 1;
});

btnConsole.addEventListener('click',()=>{
    console.log(`action: ${action}`);
    console.log(`actionPlus: ${actionPlus}`);
    console.log(`actionMinus: ${actionMinus}`);
    console.log(`actionMultiplication: ${actionMultiplication}`);
    console.log(`actionDivision: ${actionDivision}`);
    console.log(`numberOne: ${numberOne}`);
    console.log(`numberTwo: ${numberTwo}`);
    console.log(`result: ${result}`);
    console.log(`negativityOne: ${negativityOne}`);
    console.log(`negativityTwo: ${negativityTwo}`);
    console.log(`commaOne: ${commaOne}`);
    console.log(`commaTwo: ${commaTwo}`);
    console.log(`commaOneUse: ${commaOneUse}`);
    console.log(`commaTwoUse: ${commaTwoUse}`);
    console.log(`numberOneAfterComma: ${numberOneAfterComma}`);
    console.log(`denominatorNumberOneAfterComma: ${denominatorNumberOneAfterComma}`);
    console.log(`numberTwoAfterComma: ${numberTwoAfterComma}`);
    console.log(`denominatorNumberTwoAfterComma: ${denominatorNumberTwoAfterComma}`);
});
