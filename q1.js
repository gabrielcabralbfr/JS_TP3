const minimumField = document.getElementById("min-value")
const maximumField = document.getElementById("max-value")

const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")

let errorsCount = 0

function isNotNumber(element) {
    if (element.value == "" || element.value == undefined || element.value == null || isNaN(element.value)) {
        return true;
    }

    return false;
}



function CheckforErrors2() {

    if (minimumField.value > maximumField.value) {
        showErrorMessageAt(span2, "O valor mínimo precisa ser menor que o valor máximo")
        errorsCount++
    }

    if (isNotNumber(minimumField)) {
        showErrorMessageAt(span1, "Você precisa especificar um valor numérico")
        errorsCount++
    }


    if (isNotNumber(maximumField)) {
        showErrorMessageAt(span2, "Você precisa especificar um valor numérico")
        errorsCount++
    }


}


function hasNoError() {
    if (errorsCount == 0) {
        return true
    } else {
        return false
    }
}


function showErrorMessageAt(element, errorMessage) {

    element.innerHTML = errorMessage
    element.style.color = '#f00'

}

function removeErrorMessageAt(element) {
    element.innerHTML = ""
    element.style.color = '#f00'
}

function CleanErrorMessages() {
    errorsCount = 0
    removeErrorMessageAt(span1)
    removeErrorMessageAt(span2)
    removeErrorMessageAt(span3)
}

function getResult() {
    let result = 0

    for (let i = minimumField.value; i < maximumField.value; i++) {
        if ((i % 2 == 0) && (i % 3 == 0)) {
            result++
        }
    }
    alert(`Existem ${result} números que são multiplos de 2 e 3 entre ${minimumField.value} e ${maximumField.value}`)
}

function ValidateQ1() {
    CheckforErrors2()

    if (hasNoError()) {
        getResult()
    }
}