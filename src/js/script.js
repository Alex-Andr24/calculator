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
const figure0 = ('0');
const figure1 = ('1');
const figure2 = ('2');
const figure3 = ('3');
const figure4 = ('4');
const figure5 = ('5');
const figure6 = ('6');
const figure7 = ('7');
const figure8 = ('8');
const figure9 = ('9');
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

const btnAll = document.querySelectorAll('button');
btnAll.forEach(function() {
    this.addEventListener('click', visualization)
});


btnMinus.addEventListener('click', function(){
    if (action == false && numberOne === '' && negativityOne == false ) {
        negativityOne = true;
    } else if ( action == false && numberOne === '' && negativityOne) {
        negativityOne = false;
    } 
});

btnMinus.addEventListener('click', function(){
    if (action && numberTwo === '' && negativityTwo == false ) {
        negativityTwo = true;
    } else if (action && numberTwo === '' && negativityTwo) {
        negativityTwo = false;
    }
});

btnMinus.addEventListener('click', function(){
    if (action == false && numberOne !== '') {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    }
});

btnMinus.addEventListener('click', function(){
    if (action && numberTwo > 0) {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    }
});

btnPlus.addEventListener('click', function(){
    if (negativityTwo){
        negativityTwo = false
    }
});

btnPlus.addEventListener('click', function(){
    action = true;
    actionPlus = true;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
});

btnDivision.addEventListener('click', function(){
    action = true;
    actionPlus = false;
    actionMinus = false;
    actionDivision = true;
    actionMultiplication = false;
});

btnMultiplication.addEventListener('click',function(){
    action = true;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = true;
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
    return numberOne;
}

perform.addEventListener('click', function(){
    if (negativityOne){
        numberOne = -numberOne;
        return numberOne;
    };
});
perform.addEventListener('click', function(){
    if (negativityTwo){
        numberTwo = -numberTwo;
        return numberTwo;
    }
});

perform.addEventListener('click', function(){
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

btnReset.addEventListener('click', function(){
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

btnComma.addEventListener('click', function(){
    if (action == false && commaOne == false && commaOneUse == false){
        commaOne = true;
    } else if (action == false && commaOne){
        commaOne = false;
    }
});

btnComma.addEventListener('click', function(){
    if (action&&commaTwo == false&&commaTwoUse == false){
        commaTwo = true;
    } else if (action&&commaTwo&&commaTwoUse == false){
        commaTwo = false;
    }
});

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

btn0.addEventListener('click', set);
btn1.addEventListener('click', set);
btn2.addEventListener('click', set);
btn3.addEventListener('click', set);
btn4.addEventListener('click', set);
btn5.addEventListener('click', set);
btn6.addEventListener('click', set);
btn7.addEventListener('click', set);
btn8.addEventListener('click', set);
btn9.addEventListener('click', set);

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

btnConsole.addEventListener('click', function(){
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
    console.log(`All: ${btnAll}`);
});

const example = prompt('Антон, введите ваше имя');
alert(`${example}, шутка:)))`)