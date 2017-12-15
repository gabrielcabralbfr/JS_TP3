document.getElementById("q3").innerHTML = `<h2>Questao 3</h2>
<input type="button" onclick="gerarAlunos()" value="Gerar Alunos" />

<div id="relatorio" class="slideOut">
    <table>
        <caption>Relatorio</caption>

        <tbody id="table">
        </tbody>
        <tfoot id="tfoot">

        </tfoot>
    </table>
</div>`


let Alunos = [];
const report = document.getElementById("relatorio");

function generateRandom() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function getRandomGrade() {
    return Math.random() * 100
}

class Aluno {
    getNome() {
        return this.nome;
    }

    getNota() {
        return Math.round(this.nota, 2);
    }

    SetStatus() {
        if (this.getNota() >= 60) {
            return this.status = "Aprovado"
        } else {
            return this.status = "Reprovado"
        }
    }
    getStatus() {
        return this.status;
    }

    constructor(nome, nota) {
        this.Guid = (generateRandom() + "-" + generateRandom().substr(0, 3)).toLowerCase();
        this.nome = nome;
        this.nota = nota;
        this.status = this.SetStatus()
    }

}


function getStatusResult(aluno) {
    const tfoot = document.getElementById("tfoot");

    const rowFoot = document.createElement('tr');
    let dataFoot = document.createElement('td');

    let aprovados = 0;
    let reprovados = 0;


    for (let aluno of Alunos) {
        if (aluno.getStatus() == "Aprovado") {
            aprovados++;
        } else {
            reprovados++;
        }
    }


    tfoot.appendChild(rowFoot);
    rowFoot.appendChild(dataFoot);


    dataFoot.innerHTML = `APROVADOS: ${Math.round((aprovados / Alunos.length) * 100)}% | REPROVADOS: ${Math.round((reprovados / Alunos.length) * 100)}%`;
}

function createAlunoInDOM(Aluno) {
    const table = document.getElementById("table");

    const row = document.createElement('tr');
    let data1 = document.createElement('td');


    table.appendChild(row);
    row.appendChild(data1);


    data1.innerHTML = `Matricula: ${Aluno.Guid} - Nota: ${Aluno.getNota()} Status: ${Aluno.getStatus()}`;

}

function gerarAlunos() {

    document.getElementById("table").innerHTML = "";
    document.getElementById("tfoot").innerHTML = "";
    Alunos = [];

    // Populando o array de alunos
    for (let i = 0; i < 20; i++) {
        Alunos.push(new Aluno(Math.random().toString(36).substring(7), getRandomGrade()));
    }

    // Inserindo cada aluno na DOM
    for (let aluno of Alunos) {
        createAlunoInDOM(aluno);

    }
    getStatusResult();
}