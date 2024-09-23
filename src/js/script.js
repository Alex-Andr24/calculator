console.log ('начало скрипта');
// btn_action
// btn_reset
// btn_figure
// btn_show
// btn_perform
// bl_visual

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
// нужна ли последняя переменная?


// btn_action



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

// btn_perform

function Perform(){
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
}

function ActionEndFalse(){
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
};

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
        Perform();
        return numberOne;
    } else if(actionMinus  == true && action == true) {
        console.log('subtraction');
        numberOne = Number(numberOne) - Number(numberTwo);
        Perform();
        return numberOne;
    } else if (actionDivision == true && action == true){
        console.log('division');
        numberOne = Number(numberOne) / Number(numberTwo);
        Perform();
        return numberOne;
    } else if (actionMultiplication == true && action == true){
        console.log('Multiplication');
        numberOne = Number(numberOne) * Number(numberTwo);
        Perform();
        return numberOne;
    }
});

// btn_reset

btnReset.addEventListener('click', function(){
    numberOne = ('0');
    numberTwo = ('0');
    result = '';
    ActionEndFalse();
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

btn0.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure0;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure0) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure0;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure0) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn1.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure1;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure1) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure1;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure1) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn2.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure2;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure2) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure2;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure2) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn3.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure3;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure3) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure3;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure3) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn4.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure4;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure4) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure4;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure4) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn5.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure5;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure5) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure5;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure5) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn6.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure6;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure6) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure6;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure6) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn7.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure7;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure7) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure7;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure7) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn8.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure8;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure8) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure8;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure8) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

btn9.addEventListener('click', function(){
    if (action == false && commaOne == false) {
        numberOne = numberOne + figure9;
        return numberOne;
    } else if (action == false && commaOne == true && commaOneUse == false){
        numberOne = (numberOne + figure9) / 10;
        commaOne = false;
        commaOneUse = true;
        return numberOne;
    } else if (action == true && commaTwo == false) {
        numberTwo = numberTwo + figure9;
        return numberTwo;
    } else if (action == true && commaTwo == true && commaTwoUse == false){
        numberTwo = (numberTwo + figure9) / 10;
        commaTwo = false;
        commaTwoUse = true;
        return numberTwo;
    }
});

// btn_Show


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
    // console.log(`negativityOneAfterPerfom: ${negativityOneAfterPerfom}`);
    console.log(`commaOne: ${commaOne}`);
    console.log(`commaTwo: ${commaTwo}`);
    console.log(`commaOneUse: ${commaOneUse}`);
    console.log(`commaTwoUse: ${commaTwoUse}`);
    // console.log(`btnAll:${btnAll}`);
});

// bl_visual

function visualization(){
    visNO.innerText = numberOne - 0;
    visNT.innerText = numberTwo - 0;
    // visR.innerText = (`${result}`);
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
    // if (result >= 0) {
    //     negativityOneAfterPerfom = false
    // } else {
    //     negativityOneAfterPerfom = true
    // };
    if (commaOne == true && commaOneUse == false) {
        visNOcomma.innerText = '.'
    } else {
        visNOcomma.innerText = ''
    }
    if (commaTwo == true && commaTwoUse == false) {
        visNTcomma.innerText = '.'
    } else {
        visNTcomma.innerText = ''
    }
};

btn0.addEventListener('click', visualization);
btn1.addEventListener('click', visualization);
btn2.addEventListener('click', visualization);
btn3.addEventListener('click', visualization);
btn4.addEventListener('click', visualization);
btn5.addEventListener('click', visualization);
btn6.addEventListener('click', visualization);
btn7.addEventListener('click', visualization);
btn8.addEventListener('click', visualization);
btn9.addEventListener('click', visualization);
btnPlus.addEventListener('click', visualization);
btnMinus.addEventListener('click', visualization);
btnPerform.addEventListener('click', visualization);
btnMultiplication.addEventListener('click', visualization);
btnDivision.addEventListener('click', visualization);
btnComma.addEventListener('click', visualization);
btnReset.addEventListener('click', visualization);
// btnShow.addEventListener('click', visualization);


console.log ('конец скрипта');

// btnPlus.onclik = function (){} так будет короче
// надо строчыне функции