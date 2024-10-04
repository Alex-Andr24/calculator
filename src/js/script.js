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
let numberOne = ('')
let numberTwo = ('');
let action = false;
let actionPlus = false;
let actionMinus = false;
let actionDivision = false;
let actionMultiplication = false;
let commaOne = false;
let commaTwo = false;
let negativityOne = false;
let negativityTwo = false;
let commaOneUse = false;
let commaTwoUse = false;
let numberOneAfterComma = ('');
let denominatorNumberOneAfterComma = 1;
let numberTwoAfterComma = ('');
let denominatorNumberTwoAfterComma = 1;
let figureRound = ('');
let controlZeroNumberOne;
let needControlZeroNumberOne;

const btnAll = document.querySelectorAll('button');

btnAll.forEach( () => this.addEventListener('click', visualization)
);

function visualization(){
    // if (numberOne === "00"){
    //     numberOne = '0'
    // };
    // if (numberTwo === "00"){
    //     numberTwo = '0'
    // };

    visNO.innerText = numberOne;
    // ??= '0';
    visNT.innerText = numberTwo;
    
    
    // if (control === '0' && numberOne > 0){
    //     visNO.innerText = visNO.innerText.replace(/\d/, 'delete')
    // }

    if (commaOne) {
        visNO.innerText = `${numberOne}.${numberOneAfterComma}`};
    if (commaTwo) {
        visNT.innerText = `${numberTwo}.${numberTwoAfterComma}`};
        
    if (actionPlus) {
    visS.innerText = '+';
    } else if (actionMinus) {
    visS.innerText = '-';
    } else if (actionDivision) {
    visS.innerText = ':';
    } else if (actionMultiplication) {
    visS.innerText = '*';
    } else {
    visS.innerText = '';
    };

    // кажется следующая часть кода не нужна
    // if (numberOne === '0') {
    //     visNO.innerText = '0';
    // };
    // if (action == false && numberOne === '0') {
    //     visNT.innerText = '';
    // };

    // следующая часть кода позволяет увидеть "минус", который указывает на отрицатльность Числа, перед этим Числом ещё до набора этого Числа
    if (negativityOne) {
        visNOnegativity.innerText = '-'
    };
    if (negativityOne == false) {
        visNOnegativity.innerText = ''
    };
    if (negativityTwo) {
        visNTnegativity.classList.remove('none')
    };
    if (negativityTwo == false) {
        visNTnegativity.classList.add('none')
    };
};

const btnFigureAll = [btn0, btn1, btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];

btnFigureAll.forEach( (item, i) => {
    item.addEventListener('click', set);
});

function set() {
    
    if (action == false && commaOne == false) {
        numberOne += this.innerText;
    }else if(action == false && commaOne) {
        numberOneAfterComma += this.innerText;
        commaOneUse = true;
        denominatorNumberOneAfterComma *= 10;
    }else if(action && commaTwo == false) {
        numberTwo += this.innerText;
    } else if (action && commaTwo) {
        numberTwoAfterComma += this.innerText;
        commaTwoUse = true;
        denominatorNumberTwoAfterComma *= 10;
    };

    if (numberOne.match(/^\d/) != null) {
        numberOne.match(/^\d/).forEach( (item) => {
        needControlZeroNumberOne = item === '0' ? true : false
    });
    };
    if (numberOne > 0 && needControlZeroNumberOne == true){
        numberOne = numberOne.replace(/^0*/, '')
    };

    if (numberTwo.match(/^\d/) != null) {
        numberTwo.match(/^\d/).forEach( (item) => {
        needControlZeroNumberTwo = item === '0' ? true : false
        });
    };
    if (numberTwo > 0 && needControlZeroNumberTwo == true){
        numberTwo = numberTwo.replace(/^0*/, '')
    };

};

btnComma.addEventListener('click',()=> {
    if (action == false 
        && numberOne % 1 == 0
        && commaOne == false 
        && commaOneUse == false) {
        commaOne = true;
    } else if (
        action == false 
        && commaOne
        && commaOneUse == false) {
        commaOne = false;
    };
});

btnComma.addEventListener('click',() => {
    if (action 
        && commaTwo == false
        && commaTwoUse == false) {
        commaTwo = true;
    } else if (
        action 
        && commaTwo
        && commaTwoUse == false) {
        commaTwo = false;
    };
});

inputvalueRounding.addEventListener('input',() => {
    raundingDescr.classList.add('raunding-descr_deactivated');
    acceptValueRauding.classList.remove('raunding-accept_deactivated');
    if (inputvalueRounding.value >= 0) {
        inputvalueRounding.classList.add('raunding-input_green');
        inputvalueRounding.classList.remove('raunding-input_red');

        acceptValueRauding.classList.remove('raunding-accept_yellow');
        acceptValueRauding.innerText = 'Принять настройку'
        acceptValueRauding.classList.add('raunding-input_green');

    } else if (inputvalueRounding.value < 0) {
        acceptValueRauding.innerText = 'Вернуть по умолчанию';
        acceptValueRauding.classList.add('raunding-accept_yellow');

        inputvalueRounding.classList.remove('raunding-input_green');
        inputvalueRounding.classList.add('raunding-input_red');
    };
});

formRaundingAccept.addEventListener('submit', (e) => {
    e.preventDefault();
    if (acceptValueRauding.innerText === 'Принять настройку') {
        acceptValueRauding.innerText = "Вернуть по умолчанию";
        acceptValueRauding.classList.remove('raunding-input_green');

        inputvalueRounding.classList.remove('raunding-input_green');

        figureRound = inputvalueRounding.value;

    } else if (acceptValueRauding.innerText === "Вернуть по умолчанию") {
        inputvalueRounding.value = '';
        figureRound = inputvalueRounding.value;

        inputvalueRounding.classList.remove('raunding-input_green');
        inputvalueRounding.classList.remove('raunding-input_red');

        acceptValueRauding.classList.remove('raunding-accept_yellow');
        acceptValueRauding.classList.remove('raunding-input_green');
        acceptValueRauding.classList.add('raunding-accept_deactivated');

        raundingDescr.classList.remove('raunding-descr_deactivated');
    };
});

btnMinus.addEventListener('click',() => {
    if (action == false 
        && numberOne === '' 
        && negativityOne == false ) {
        negativityOne = true;
    } else if ( action == false 
        && numberOne === '' 
        && negativityOne) {
        negativityOne = false;
    };
});

btnMinus.addEventListener('click',() => {
    if (action 
        && numberTwo === '' 
        && negativityTwo == false ) {
        negativityTwo = true;
    } else if (action 
        && numberTwo === '' 
        && negativityTwo) {
        negativityTwo = false;
    };
});

btnMinus.addEventListener('click',() => {
    if (action == false && numberOne !== '') {
        action = true;
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    };
});

btnMinus.addEventListener('click',() => {
    if (action && numberTwo > 0) {
        actionPlus = false;
        actionMinus = true;
        actionDivision = false;
        actionMultiplication = false;
    };
});

btnPlus.addEventListener('click',() => {
    if (negativityTwo) {negativityTwo = false};
});

btnPlus.addEventListener('click',() => {
    action = true;
    actionPlus = true;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
});

btnDivision.addEventListener('click',() => {
    action = true;
    actionPlus = false;
    actionMinus = false;
    actionDivision = true;
    actionMultiplication = false;
});

btnMultiplication.addEventListener('click',() => {
    action = true;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = true;
});

perform.addEventListener('click',() => {
    if (negativityOne) {
        numberOne = -numberOne;
        return numberOne;
    };
});

perform.addEventListener('click',() => {
    if (negativityTwo) {
        numberTwo = -numberTwo;
        return numberTwo;
    }
});

perform.addEventListener('click',() => {
    if (actionPlus && action) {
        numberOne = 
        (numberOne + numberOneAfterComma) 
        /denominatorNumberOneAfterComma 
        + 
        (numberTwo + numberTwoAfterComma) 
        / denominatorNumberTwoAfterComma;
        afterCalculate();
    } else if(actionMinus && action) {
        numberOne = 
        (numberOne + numberOneAfterComma) 
        /denominatorNumberOneAfterComma 
        - 
        (numberTwo + numberTwoAfterComma) 
        / denominatorNumberTwoAfterComma;
        afterCalculate();
    } else if (actionDivision && action) {
        numberOne = 
        ((numberOne + numberOneAfterComma) 
        /denominatorNumberOneAfterComma) 
        / 
        ((numberTwo + numberTwoAfterComma) 
        / denominatorNumberTwoAfterComma);
        afterCalculate();
    } else if (actionMultiplication && action) {
        numberOne = 
        ((numberOne + numberOneAfterComma) 
        /denominatorNumberOneAfterComma) 
        * 
        ((numberTwo + numberTwoAfterComma) 
        / denominatorNumberTwoAfterComma);
        afterCalculate();
    };
});

function afterCalculate() {
    action = false;
    actionPlus = false;
    actionMinus = false;
    actionDivision = false;
    actionMultiplication = false;
    numberTwo = ('');
    negativityOne = false;
    negativityTwo = false;
    commaOne = false;
    commaTwo = false;
    commaOneUse = false;
    commaTwoUse = false;
    numberOneAfterComma = ('');
    denominatorNumberOneAfterComma = 1;
    numberTwoAfterComma = ('');
    denominatorNumberTwoAfterComma = 1;
    if (figureRound > '0' || figureRound === '0' ) {
        numberOne = numberOne.toFixed(figureRound)
    };
};

btnReset.addEventListener('click', () => {
    numberOne = ('');
    numberTwo = ('');
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

btnConsole.onclick = () => {
    console.log(`action: ${action}`);
    console.log(`actionPlus: ${actionPlus}`);
    console.log(`actionMinus: ${actionMinus}`);
    console.log(`actionMultiplication: ${actionMultiplication}`);
    console.log(`actionDivision: ${actionDivision}`);
    console.log(`numberOne: ${numberOne}`);
    console.log(`numberTwo: ${numberTwo}`);
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
    console.log(`control: ${controlZero}`);
    console.log(typeof(controlZero));
};
