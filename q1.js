// function init() {
//     let html = `<h2>Questao 1</h2>
//     <div class='input'>
//         <label for='min-value'>Informe um valor minimo:</label>
//         <input id='min-value' type='text' onfocus='CleanErrorMessages()'>
//         <span id='span1'></span>
//     </div>
    
//     <div class='input'>
//         <label for='max-value'>Informe um valor maximo:</label>
//         <input id='max-value' type='text' onfocus='CleanErrorMessages()'>
//         <span id='span2'></span>
//     </div>
    
//     <input type='button' onclick='alert('oi')' value='Calcular' />`;
//     let divq1 = document.getElementById("q1")
//     divq1.innerHTML = html
// }

// window.onload = init()

// let errorsCount = 0

// function isNotNumber(element) {
//     if (element.value == "" || element.value == undefined || element.value == null || isNaN(element.value)) {
//         return true;
//     }

//     return false;
// }

// function hasNoError() {
//     if (errorsCount == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// function showErrorMessageAt(element, errorMessage) {

//     element.innerHTML = errorMessage
//     element.style.color = '#f00'

// }

// function removeErrorMessageAt(element) {
//     element.innerHTML = ""
//     element.style.color = '#f00'
// }

// function CleanErrorMessages() {
//     errorsCount = 0
//     let spans = document.querySelectorAll("span");

//     for (let span of spans) {
//         removeErrorMessageAt(span)

//     }
// }

// const minimumField = document.getElementById("min-value")
// const maximumField = document.getElementById("max-value")

// const span1 = document.getElementById("span1")
// const span2 = document.getElementById("span2")



// function CheckforErrors1() {

//     if (minimumField.value > maximumField.value) {
//         showErrorMessageAt(span2, "O valor mínimo precisa ser menor que o valor máximo")
//         errorsCount++
//     }

//     if (isNotNumber(minimumField)) {
//         showErrorMessageAt(span1, "Você precisa especificar um valor numérico")
//         errorsCount++
//     }


//     if (isNotNumber(maximumField)) {
//         showErrorMessageAt(span2, "Você precisa especificar um valor numérico")
//         errorsCount++
//     }


// }

// function getResultQuestion1() {
//     let result = 0

//     for (let i = minimumField.value; i < maximumField.value; i++) {
//         if ((i % 2 == 0) && (i % 3 == 0)) {
//             result++
//         }
//     }
//     alert(`Existem ${result} números que são multiplos de 2 e 3 entre ${minimumField.value} e ${maximumField.value}`)
// }

// function ValidateQ1() {
//     CheckforErrors1()

//     if (hasNoError()) {
//         getResultQuestion1()
//     }
// }