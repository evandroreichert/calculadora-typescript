"use strict";
const btn = document.querySelector('#calc-btn');
btn.onclick = () => {
    let n1 = document.getElementById('iN1');
    let n2 = document.getElementById('iN2');
    let operator = document.querySelector('#operator');
    let output = document.querySelector('#iOutput');
    let result;
    output.innerText = ' ';
    switch (operator.value) {
        case 'soma':
            result = Number(n1.value) + Number(n2.value);
            output.innerText += result;
            break;
        case 'subtrai':
            result = Number(n1.value) - Number(n2.value);
            output.innerText += result;
            break;
        case 'multiplica':
            result = Number(n1.value) * Number(n2.value);
            output.innerText += result;
            break;
        case 'divide':
            result = Number(n1.value) / Number(n2.value);
            output.innerText += result;
            break;
    }
};
