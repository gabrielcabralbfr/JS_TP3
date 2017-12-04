const Field = document.getElementById("field")
const span3 = document.getElementById("span3")

function CheckforErrors2() {

    if (isNotNumber(Field)) {
        showErrorMessageAt(span3, "Você precisa especificar um valor numérico")
        errorsCount++
    }

}


function getResultQuestion2(element) {
    let result = element

    for (let i = element; i > 1; i--) {
        result *= i - 1
    }

    alert(`O Fatorial de ${element} é ${result}`)
}


function ValidateQ2() {
    CheckforErrors2()

    if (hasNoError()) {
        getResultQuestion2(Field.value)
    }
}