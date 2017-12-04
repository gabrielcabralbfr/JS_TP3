import {
    isNotNumber,
    hasNoError,
    showErrorMessageAt
} from 'validation';

const minimumField = document.getElementById("min-value")
const maximumField = document.getElementById("max-value")\

const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")


function CheckforErrors1() {

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

function getResultQuestion1() {
    let result = 0

    for (let i = minimumField.value; i < maximumField.value; i++) {
        if ((i % 2 == 0) && (i % 3 == 0)) {
            result++
        }
    }
    alert(`Existem ${result} números que são multiplos de 2 e 3 entre ${minimumField.value} e ${maximumField.value}`)
}

function ValidateQ1() {
    CheckforErrors1()

    if (hasNoError()) {
        getResultQuestion1()
    }
}