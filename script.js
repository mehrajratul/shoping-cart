let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('#input');

btnAdd.addEventListener('click', ()=>{
    input.value = parseInt(input.value) + 1;
});
btnSubtract.addEventListener('click', ()=>{
    input.value = parseInt(input.value) - 1;
});


let btnAddCase = document.querySelector('#addCase');
let btnSubtractCase = document.querySelector('#subtractCase');
let caseInput = document.querySelector('#caseInput');

btnAddCase.addEventListener('click', ()=>{
    caseInput.value = parseInt(caseInput.value) + 1;
})
btnSubtractCase.addEventListener('click', ()=>{
    caseInput.value = parseInt(caseInput.value) - 1;
});