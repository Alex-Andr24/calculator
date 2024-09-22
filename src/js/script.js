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
const btnConsole = document.querySelector('#Console');
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
let result = ('0');
let actionDivision = (false);
let actionMultiplication = (false);
let negativityOne = false;
let negativityTwo = false;

const btnexample = document.querySelector('#example');
// нужно ли было присваивать константы эллемнтам имеющим ID?

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

function ActionEndFalse(){
    action = false;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
    negativityOne = false;
    negativityTwo = false;
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
})


// perform.addEventListener('click', function(){
//     if (negativityOne == true && actionMinus == true){
//         numberTwo = Number(numberTwo)*-1;
//         return numberTwo;
//     }
// })
// странно что мне пришлось это прописать 

perform.addEventListener('click', function(){
    if (actionPlus == true && action == true ) {
        console.log('addition');
        result = Number(numberOne) + Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        ActionEndFalse();
        return result;
    } else if(actionMinus  == true && action == true) {
        console.log('subtraction');
        result = Number(numberOne) - Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        ActionEndFalse();
        return result;
    } else if (actionDivision == true && action == true){
        console.log('division');
        result = Number(numberOne) / Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        ActionEndFalse();
        return result;
    } else if (actionMultiplication == true && action == true){
        console.log('Multiplication');
        result = Number(numberOne) * Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        ActionEndFalse();
        return result;
    }
});

// btn_reset

btnReset.addEventListener('click', function(){
    numberOne = ('0');
    numberTwo = ('0');
    // visR.setAttribute('value','0') не работает
    // visR.removeAttribute('value') не работает
    result = '';
    ActionEndFalse();
});


btn0.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure0;
        return numberOne;
    } else if(action == true) {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure0;
        return numberTwo;
    }
});

btn1.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure1;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure1;
        return numberTwo;
    }
});

btn2.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure2;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure2;
        return numberTwo;
    }
});

btn3.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure3;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure3;
        return numberTwo;
    }
});

btn4.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure4;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure4;
        return numberTwo;
    }
});

btn5.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure5;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure5;
        return numberTwo;
    }
});

btn6.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure6;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure6;
        return numberTwo;
    }
});

btn7.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure7;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure7;
        return numberTwo;
    }
});

btn8.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure8;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure8;
        return numberTwo;
    }
});

btn9.addEventListener('click', function(){
    if (action == false) {
        console.log('click numberOne');
        numberOne = numberOne + figure9;
        return numberOne;
    } else {
        console.log('click numberTwo');
        numberTwo = numberTwo + figure9;
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
    console.log(`negativityTwo: ${negativityTwo}`)
    // console.log(`btnAll:${btnAll}`);
});

// btnAll.addEventListener('click', function(){
//     visNO.value = numberOne;
//     visNT.value = numberTwo;
//     visR.value = (`=${result}`)
// });

// btnShow это бывший Console.log

// btnShow.addEventListener('click', function(){
//     if (actionPlus == true){
//         visS.value = '+';
//     } else if (actionMinus == true) {
//         visS.value = '-';
//     } else if (actionDivision == true) {
//         visS.value = ':';
//     } else if (actionMultiplication == true) {
//         visS.value = '*';
//     } else {
//         visS.value = '';
//     }
// });

// btnShow.addEventListener('click', function(){
//     visNO.value = numberOne;
//     visNT.value = numberTwo;
//     visR.value = (`=${result}`)
// });

// bl_visual

function visualization(){
    visNO.value = numberOne - 0;
    visNT.value = numberTwo - 0;
    visR.value = (`${result}`);
    btnexample.innerText = 'успех';
    if (actionPlus == true){
        visS.value = '+';
    } else if (actionMinus == true) {
        visS.value = '-';
    } else if (actionDivision == true) {
        visS.value = ':';
    } else if (actionMultiplication == true) {
        visS.value = '*';
    } else {
        visS.value = '';
    };
    if (numberOne === '0'){
        visNO.value = '';
    }
    if (action == false) {
        visNT.value = '';
    };
    if (numberTwo === '0') {
        visNT.value = ''
    };
    if (result === '0') {
        visR.value = ''
    };
    if (negativityOne == true){
        visNOnegativity.classList.remove('none')
    };
    if (negativityOne == false){
        visNOnegativity.classList.add('none')
    };
    if (negativityTwo == true){
        visNTnegativity.classList.remove('none')
    };
    if (negativityTwo == false){
        visNTnegativity.classList.add('none')
    };
}

//     visNO.value = numberOne - 0;
//     visNT.value = numberTwo - 0;
// напоминаю что это попытка лишить числа строчного значения - сделать числовым ведь все операции кроме сложения приводт набор цифр к числовому значению p.s. со слов Антона
// вопрос почему не надо делать return при этом?

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
btnReset.addEventListener('click', visualization);
// btnShow.addEventListener('click', visualization);


console.log ('конец скрипта');

// btnPlus.onclik = function (){} так будет короче