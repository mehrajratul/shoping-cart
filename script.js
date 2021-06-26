let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('#input');

btnAdd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
    let addPhonePrice = document.getElementById('addPhonePrice');
    let price = 1219;
    addPhonePrice.innerText = price * input.value;
    let subTotal = document.querySelector('#subTotal');
    subTotal.innerText = parseFloat(addPhonePrice.innerText) + parseFloat(addCasePrice.innerText);
    let total = document.getElementById('total');
    total.innerText = subTotal.innerText;
});
btnSubtract.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
    let addPhonePrice = document.getElementById('addPhonePrice');
    let NegPrice = -(-1219);
    addPhonePrice.innerText = NegPrice * input.value;
    subTotal.innerText = parseFloat(addPhonePrice.innerText) + parseFloat(addCasePrice.innerText);
    let total = document.getElementById('total');
    total.innerText = subTotal.innerText;
});


let btnAddCase = document.querySelector('#addCase');
let btnSubtractCase = document.querySelector('#subtractCase');
let caseInput = document.querySelector('#caseInput');

btnAddCase.addEventListener('click', () => {
    caseInput.value = parseInt(caseInput.value) + 1;
    const addCasePrice = document.getElementById('addCasePrice');
    const casePrice = 59;
    addCasePrice.innerText = casePrice * caseInput.value;
    subTotal.innerText = parseFloat(addCasePrice.innerText) + parseFloat(addPhonePrice.innerText);
    let total = document.getElementById('total');
    total.innerText = subTotal.innerText;
});
btnSubtractCase.addEventListener('click', () => {
    caseInput.value = parseInt(caseInput.value) - 1;
    const negCasePrice = -(-59);
    addCasePrice.innerText = negCasePrice * caseInput.value;
    subTotal.innerText = parseFloat(addCasePrice.innerText) + parseFloat(addPhonePrice.innerText);
    let total = document.getElementById('total');
    total.innerText = subTotal.innerText;
});
