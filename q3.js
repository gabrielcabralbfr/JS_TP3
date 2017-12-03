function Toggle() {
    const report = document.getElementById("relatorio");

    if (report.style.display === "none") {
        report.style.display = "block";
    } else {
        report.style.display = "none";
    }

}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function getRandomGrade() {
    return Math.random() * 100
}

class Aluno {
    constructor(nome, nota) {
        this.Guid = (S4() + "-x" + S4().substr(0, 3)).toLowerCase();
        this.nome = nome;
        this.nota = nota;
        this.status = "teste";
    }

    getNome() {
        return this.nome;
    }

    getNota() {
        return Math.round(this.nota, 2);
    }

    getStatus() {
        return this.status;
    }

    SetRandomStatus() {
        let random = Math.floor((Math.random() * 2) + 1)

        switch (random) {
            case 1:
                this.status = "Aprovado";
                break;

            case 2:
                this.status = "Reprovado";
                break;
        }
    }
}
let Alunos = [];

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

    Aluno.SetRandomStatus();

    data1.innerHTML = `Aluno nº ${Aluno.Guid} - Nota: ${Aluno.getNota()} Status: ${Aluno.getStatus()}`;


}

function gerarAlunos() {

    // Populando o array de alunos
    for (let i = 0; i < 20; i++) {
        Alunos.push(new Aluno(Math.random().toString(36).substring(7), getRandomGrade()));
    }

    for (let aluno of Alunos) {
        createAlunoInDOM(aluno);

    }
    getStatusResult();
}