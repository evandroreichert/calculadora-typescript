const btn = document.querySelector('#calc-btn') as HTMLButtonElement

btn.onclick = () => {
    let n1 = document.getElementById('iN1') as HTMLInputElement
    let n2 = document.getElementById('iN2') as HTMLInputElement
    let operator = document.querySelector('#operator') as HTMLSelectElement
    let output = document.querySelector('#iOutput') as HTMLOutputElement
    let result: number

    output.innerText = ' '

    switch (operator.value) {

        case 'soma':
            result  = Number(n1.value) + Number(n2.value)
            output.innerText += result
            break;

        case 'subtrai':
            result = Number(n1.value) - Number(n2.value)
            output.innerText += result
            break;

        case 'multiplica':
            result = Number(n1.value) * Number(n2.value)
            output.innerText += result
            break;

        case 'divide':
            result = Number(n1.value) / Number(n2.value)
            output.innerText += result
            break;
    }}
