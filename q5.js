document.getElementById("q5").innerHTML = `<h2>Questao 5</h2>

        <div class="input">
            <label for="lado1">Insira o valor 1</label>
            <input id="lado1" type="text" onfocus="CleanErrorMessages()">
            <span id="span7"></span>
        </div>

        <div class="input">
            <label for="lado2">Insira o valor 2</label>
            <input id="lado2" type="text" onfocus="CleanErrorMessages()">
            <span id="span8"></span>
        </div>

        <div class="input">
            <label for="lado3">Insira o valor 3</label>
            <input id="lado3" type="text" onfocus="CleanErrorMessages()">
            <span id="span9"></span>
        </div>
        <input type="button" onclick="ValidateQ5();" value="Calcular" />`;

let errorsQ5 = 0;

function isNotNumber5(element) {
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

function CheckforErrorsQ5() {
  if (isNotNumber5(lado1)) {
    showErrorMessageAt(span7, "Você precisa especificar um valor numérico");
    errorsQ5++;
  }

  if (isNotNumber5(lado2)) {
    showErrorMessageAt(span8, "Você precisa especificar um valor numérico");
    errorsQ5++;
  }

  if (isNotNumber5(lado3)) {
    showErrorMessageAt(span9, "Você precisa especificar um valor numérico");
    errorsQ5++;
  }
}

function hasNoError5() {
  if (errorsQ5 == 0) {
    return true;
  } else {
    return false;
  }
}

function getResult5() {
  let ladosIguais = 0;

  if (parseInt(lado1.value) == parseInt(lado2.value)) {
    ladosIguais++;
  }
  if (parseInt(lado1.value) == parseInt(lado3.value)) {
    ladosIguais++;
  }
  if (parseInt(lado3.value) == parseInt(lado2.value)) {
    ladosIguais++;
  }

  switch (ladosIguais) {
    case 0:
      alert("Triângulo Escaleno");
      break;
    case 1:
      alert("Triângulo Isósceles");
      break;
    case 2:
      alert("Triângulo Equilátero");
      break;
    case 3:
      alert("Triângulo Equilátero");
  }
}

function ValidateQ5() {
  errorsQ5 = 0;
  let lado1 = document.getElementById("lado1");
  let lado2 = document.getElementById("lado2");
  let lado3 = document.getElementById("lado3");

  const span7 = document.getElementById("span7");
  const span8 = document.getElementById("span8");
  const span9 = document.getElementById("span9");

  CheckforErrorsQ5();

  if (hasNoError5()) {
    getResult5();
  }
}
