let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('#input');

btnAdd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
    let addPhonePrice = document.getElementById('addPhonePrice');
    let price = 1219;
    addPhonePrice.innerText = price*input.value;
});
btnSubtract.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
    let addPhonePrice = document.getElementById('addPhonePrice');
    let NegPrice = -(-1219);
    addPhonePrice.innerText = NegPrice*input.value;
});
// let addPhonePrice = document.getElementById('addPhonePrice');
// addPhonePrice.innerText = ;


let btnAddCase = document.querySelector('#addCase');
let btnSubtractCase = document.querySelector('#subtractCase');
let caseInput = document.querySelector('#caseInput');

btnAddCase.addEventListener('click', () => {
    caseInput.value = parseInt(caseInput.value) + 1;
})
btnSubtractCase.addEventListener('click', () => {
    caseInput.value = parseInt(caseInput.value) - 1;
});