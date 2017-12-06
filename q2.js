(function execute() {
    const init = function initHTML() {
        let html = `<h2>Questão 2</h2>
        <div class="input">
            <label for="field">Calcular o Fatorial de:</label>
            <input id="field" type="text" onfocus="CleanErrorMessages()">
            <span id="span3"></span>
        </div>
        
        <input type="button" id="btn4" value="Calcular" />`;
        let divq2 = document.getElementById("q2")
        divq2.innerHTML = html
    }

    window.onload = init

})()

document.getElementById('btn4').addEventListener('click', function () {
    function q2() {

        const Field = document.getElementById("field")
        const span3 = document.getElementById("span3")

        let errorsCount = 0

        function isNotNumber(element) {
            if (element.value == "" || element.value == undefined || element.value == null || isNaN(element.value)) {
                return true;
            }

            return false;
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
            let spans = document.querySelectorAll("span");

            for (let span of spans) {
                removeErrorMessageAt(span)

            }
        }


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
    }
});