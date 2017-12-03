const Field = document.getElementById("field")


const span3 = document.getElementById("span3")

function isNotNumber(element) {
    if (element.value == "" || element.value == undefined || element.value == null || isNaN(element.value)) {
        return true;
    }

    return false;
}

function CheckforErrors() {


    if (isNotNumber(Field)) {
        showErrorMessageAt(span3, "Você precisa especificar um valor numérico")
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


function getResult(element) {
    let result = element

    for(let i = element; i > 1; i--){
        result *= i-1
    }

    alert(`O Fatorial de ${element} é ${result}`)
}


function ValidateQ2() {
    CheckforErrors()

    if (hasNoError()) {
        getResult(Field.value)
    }
}