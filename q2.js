document.getElementById("q2").innerHTML = `<h2>Questao 2</h2>
        <div class="input">
            <label for="field">Calcular o Fatorial de:</label>
            <input id="field" type="text" onfocus="CleanErrorMessages()">
            <span id="span3"></span>
        </div>

        <input type="button" id="btnQ2" value="Calcular" />`;

const Field = document.getElementById("field");
const span3 = document.getElementById("span3");

let errorsCount2 = 0;

function isNotNumber2(element) {
  if (
    element.value == "" ||
    element.value == undefined ||
    element.value == null ||
    isNaN(element.value)
  ) {
    return true;
  }

  return false;
}

function hasNoError2() {
  if (errorsCount2 == 0) {
    return true;
  } else {
    return false;
  }
}

function showErrorMessageAt2(element, errorMessage) {
  element.innerHTML = errorMessage;
  element.style.color = "#f00";
}

function removeErrorMessageAt2(element) {
  element.innerHTML = "";
  element.style.color = "#f00";
}

function CleanErrorMessages2() {
  errorsCount2 = 0;
  let spans = document.querySelectorAll("span");

  for (let span of spans) {
    removeErrorMessageAt2(span);
  }
}

function CheckforErrors2() {
  if (isNotNumber2(Field)) {
    showErrorMessageAt2(span3, "Você precisa especificar um valor numérico");
    errorsCount2++;
  }
}

function getResultQuestion2(element) {
  let result = parseInt(element);

  for (let i = element; i > 1; i--) {
    result *= i - 1;
  }

  alert(`O Fatorial de ${element} é ${result}`);
}

document.getElementById("btnQ2").addEventListener("click", function() {
  errorsCount2 = 0;
  CheckforErrors2();

  if (hasNoError2()) {
    getResultQuestion2(Field.value);
  }
});
