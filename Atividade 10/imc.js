function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    let classificacao, grau;
    switch (true) {
        case (imc < 18.5):
            classificacao = "magreza";
            grau = "0";
            break;
        case (imc >= 18.5 && imc < 25):
            classificacao = "normal";
            grau = "0";
            break;
        case (imc >= 25 && imc < 30):
            classificacao = "sobrepeso";
            grau = "1";
            break;
        case (imc >= 30 && imc < 40):
            classificacao = "obesidade";
            grau = "2";
            break;
        case (imc >= 40):
            classificacao = "obesidade grave";
            grau = "3";
            break;
        default:
            classificacao = "-";
            grau = "-";
    }
    return {
        classificacao: classificacao,
        grau: grau
    };
}

function mostrarIMC() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const imc = calcularIMC(peso, altura);
    const info = classificarIMC(imc);

    let tabela = `<table border="1" cellpadding="5">
        <tr>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Obesidade (grau)</th>
        </tr>
        <tr>
            <td>${imc.toFixed(1)}</td>
            <td>${info.classificacao}</td>
            <td>${info.grau}</td>
        </tr>
    </table>`;

    document.getElementById("resultado").innerHTML = tabela;
}
