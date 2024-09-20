// const { SassNumber } = require("sass"); как это появилось?

console.log ('начало скрипта');
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
const btnReset = document.querySelector('#reset')
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
let result = (0);
let actionDivision = (false);
let actionMultiplication = (false);

/*
console.log(action);
console.log(numberOne);
console.log(numberTwo);
console.log(numberOne); console.log(numberTwo); console.log(action); console.log(result);
console.log(actionPlus);
console.log(actionMinus);
console.log(action); console.log(actionMinus); console.log(actionPlus);
console.log(result);
*/

btnPlus.addEventListener('click', function(){
    action = true;
    actionPlus = true;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
// почему бы это не заменить на btnPlus.onclik = function (){} ведь нет доп функций при этом клике
});

btnMinus.addEventListener('click', function(){
    action = true;
    actionPlus = false;
    actionMinus = true;
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

// plus.addEventListener('click', function(){
//     action = true;
//     actionPlus = true;
// });

// minus.addEventListener('click', function(){
//     action = true;
//     actionMinus = true;
// });
// я так понимаю таким образом я обращаюсь не через константу по id

perform.addEventListener('click', function(){
    if (actionPlus == true && action == true) {
        console.log('addition');
        result = Number(numberOne) + Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        action = false;
        return result;
    } else if(actionMinus  == true && action == true) {
        console.log('subtraction');
        result = Number(numberOne) - Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        action = false;
        return result;
    } else if (actionDivision == true && action == true){
        console.log('division');
        result = Number(numberOne) / Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        action = false;
        return result;
    } else if (actionMultiplication == true && action == true){
        console.log('Multiplication');
        result = Number(numberOne) * Number(numberTwo);
        numberOne = ('0');
        numberTwo = ('0');
        action = false;
        return result;
    }
});

reset.addEventListener('click', function(){
    numberOne = ('0');
    numberTwo = ('0');
    action = false;
})

// && скорей всего не нужно будет. но надо посмотреть как я решу отрицательные числа а потом уже принимать решение об удалении 

// function set(a,b){
//     let numberOne = a + b;
//     return numberOne
// };



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

// btn4.addEventListener('click', function(){
//     console.log('click');
//     numberOne = numberOne + figure4;
//     return numberOne;
// });

// btn5.addEventListener('click', function(){
//     console.log('click');
//     numberOne = numberOne + figure5;
//     return numberOne;
// });

// btn6.addEventListener('click', function(){
//     console.log('click');
//     numberOne = numberOne + figure6;
//     return numberOne;
// });

// btn7.addEventListener('click', function(){
//     console.log('click');
//     numberOne = numberOne + figure7;
//     return numberOne;
// });

// btn8.addEventListener('click', function(){
//     console.log('click');
//     numberOne = numberOne + figure8;
//     return numberOne;
// });

// btn9.addEventListener('click', function(){
//     console.log('click');
//     numberOne = numberOne + figure9;
//     return numberOne;
// });


// btn0.addEventListener('click', set(number, figure8));

// set(number, figure8)

// let res = set(Number(meaning),Number(figure3),Number(figure9));


// let res = set(figure5,figure3, figure9);
// console.log(res);

// function set(meaning, 5, 7){
//     var meaning = meaning + 5 + 7;
//     return meaning;
// }

// console.log(meaning)
// number0.addEventListener('click', function set(meaning, number0){
//     meaning = meaning + number0;
//     return meaning;
//     console.log('meaning');
    
// })


console.log ('конец скрипта');