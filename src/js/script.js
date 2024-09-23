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
let numberOne = ('0');
let numberTwo = ('0');
let numberExample = ('0');
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
// let negativityOneAfterPerfom = false;
let commaOneUse = false;
let commaTwoUse = false;
let quantityZero = '';

const btnAll = document.querySelectorAll('button');
btnAll.forEach(function() {
    this.addEventListener('click', visualization)
});

function visualization(){
    visNO.innerText = numberOne ;
    visNT.innerText = numberTwo ;
    if (actionPlus == true){
        visS.innerText = '+';
    } else if (actionMinus == true) {
        visS.innerText = '-';
    } else if (actionDivision == true) {
        visS.innerText = ':';
    } else if (actionMultiplication == true) {
        visS.innerText = '*';
    } else {
        visS.innerText = '';
    };
    if (numberOne === '0'){
        visNO.innerText = '0';
    };
    if (action == false) {
        visNT.innerText = '';
    };
    if (numberTwo === '0') {
        visNT.innerText = ''
    };
    if (numberTwo === '0' && action == true){
        visNT.innerText = '0'
    };
    if (negativityOne == true){
        visNOnegativity.innerText = '-'
    };
    if (negativityOne == false ){
        visNOnegativity.innerText = ''
    };
    if (negativityTwo == true){
        visNTnegativity.classList.remove('none')
    };
    if (negativityTwo == false){
        visNTnegativity.classList.add('none')
    };
    if (commaOne == true && commaOneUse == false) {
        visNOcomma.innerText = '.'
    } else {
        visNOcomma.innerText = ''
    }
    if (commaTwo == true && commaTwoUse == false) {
        visNTcomma.innerText = '.'
    } else {
        visNTcomma.innerText = ''
    };
};


btnMinus.addEventListener('click', function(){
    if (action == false && numberOne === '0' && negativityOne == false ) {
        negativityOne = true;
    } else if ( action == false && numberOne === '0' && negativityOne == true ) {
        negativityOne = false;
    } 
});

btnMinus.addEventListener('click', function(){
    if (action == true && numberTwo === '0' && negativityTwo == false ) {
        negativityTwo = true;
    } else if (action == true && numberTwo === '0' && negativityTwo == true ) {
        negativityTwo = false;
    }
});

btnMinus.addEventListener('click', function(){
    if (action == false && numberOne !== '0') {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    }
});

btnMinus.addEventListener('click', function(){
    if (action == true && numberTwo > 0) {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    }
});

btnPlus.addEventListener('click', function(){
    if (negativityTwo == true){
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

function Calculate(){
    action = false;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
    negativityOne = false;
    negativityTwo = false;
    numberTwo = ('0');
    result = numberOne;
    commaOne = false;
    commaTwo = false;
    commaOneUse = true;
    commaTwoUse = false;
    return numberOne;
}

perform.addEventListener('click', function(){
    if (negativityOne == true){
        numberOne = Number(numberOne)*-1;
        return numberOne;
    };
});
perform.addEventListener('click', function(){
    if (negativityTwo == true){
        numberTwo = Number(numberTwo)*-1;
        return numberTwo;
    }
});

perform.addEventListener('click', function(){
    if (actionPlus == true && action == true ) {
        numberOne = Number(numberOne) + Number(numberTwo);
        Calculate();
    } else if(actionMinus  == true && action == true) {
        numberOne = Number(numberOne) - Number(numberTwo);
        Calculate();
    } else if (actionDivision == true && action == true){
        numberOne = Number(numberOne) / Number(numberTwo);
        Calculate();
    } else if (actionMultiplication == true && action == true){
        numberOne = Number(numberOne) * Number(numberTwo);
        Calculate();
    }
});

btnReset.addEventListener('click', function(){
    numberOne = ('0');
    numberTwo = ('0');
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
});

// btn_figure

btnComma.addEventListener('click', function(){
    if (action == false && commaOne == false && commaOneUse == false){
        commaOne = true;
    } else if (action == false && commaOne == true ) {
        commaOne = false
    }
});

btnComma.addEventListener('click', function(){
    if (action == true && commaTwo == false &&commaTwoUse == false){
        commaTwo = true;
    } else if (action == true && commaTwo == true &&commaTwoUse == false){
        commaTwo = false;
    }
});

function set(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + this.innerText;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + this.innerText) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + this.innerText;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + this.innerText) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
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

// btn0.addEventListener('click', function(){
//     if (action == false && commaOne == true){
//         quantityZero = quantityZero + '0';
//         visNO = (`${numberOne}.${quantityZero}`);
//     }
// }); нормальная визуальная составляющая

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
    console.log(`numberExample: ${numberExample}`);
    console.log(`All: ${btnAll}`);
});