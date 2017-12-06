const minField = document.getElementById("min-value2")
const maxField = document.getElementById("max-value2")
const qtdField = document.getElementById("qtd-numbers")

const span4 = document.getElementById("span4")
const span5 = document.getElementById("span5")
const span6 = document.getElementById("span6")

let errors = 0


let html = "<h2>Questão 4</h2>

        <div class="input">
            <label for="qtd-numbers">Quantidade de números:</label>
            <input id="qtd-numbers" type="text" onfocus="CleanErrorMessages()">
            <span id="span4"></span>
        </div>

        <div class="input">
            <label for="min-value2">Informe um valor mínimo:</label>
            <input id="min-value2" type="text" onfocus="CleanErrorMessages()">
            <span id="span5"></span>
        </div>

        <div class="input">
            <label for="max-value2">Informe um valor máximo:</label>
            <input id="max-value2" type="text" onfocus="CleanErrorMessages()">
            <span id="span6"></span>
        </div>
        <input type="button" onclick="ValidateQ4();" value="Calcular" />

    "

function isNotNumber4(element) {
    if (element.value == "" || element.value == undefined || element.value == null || isNaN(element.value)) {
        return true;
    }

    return false;
}



function CheckforErrors4() {

    if (minField.value > maxField.value) {
        showErrorMessageAt(span6, "O valor mínimo não pode ser maior que o valor máximo")
        errors++
    }


    if (isNotNumber4(qtdField)) {
        showErrorMessageAt(span4, "Você precisa especificar um valor numérico")
        errors++
    }


    if (isNotNumber4(minField)) {
        showErrorMessageAt(span5, "Você precisa especificar um valor numérico")
        errors++
    }


    if (isNotNumber4(maxField)) {
        showErrorMessageAt(span6, "Você precisa especificar um valor numérico")
        errors++
    }

    if ((parseInt(maxField.value) - parseInt(minField.value)) < parseInt(qtdField.value)) {
        showErrorMessageAt(span4, `Não existem ${qtdField.value} números entre ${minField.value} e ${maxField.value}`)
        errors++
    }


}


function hasNoError4() {
    if (errors == 0) {
        return true
    } else {
        return false
    }
}

function getResult4() {
    let numbers = new Array(parseInt(qtdField.value))

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.random() * (maxField.value = minField.value) + minField.value
    }

    console.log(numbers)

}

function ValidateQ4() {
    CheckforErrors4()

    if (hasNoError4()) {
        getResult4()
    }
}