// 1. Retorna o maior de três números
function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

function mostrarMaior() {
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const n3 = Number(document.getElementById("n3").value);
    const resultado = maiorDeTres(n1, n2, n3);
    document.getElementById("resultado-maior").textContent = "Maior número é: " + resultado;
}

// 2. Ordem crescente
function ordemCrescente(a, b, c) {
    let arr = [a, b, c];
    arr.sort(function(x, y){ return x - y; });
    return arr;
}

function mostrarCrescente() {
    const c1 = Number(document.getElementById("c1").value);
    const c2 = Number(document.getElementById("c2").value);
    const c3 = Number(document.getElementById("c3").value);
    const resultado = ordemCrescente(c1, c2, c3);
    document.getElementById("resultado-crescente").textContent = "Ordem crescente: " + resultado.join(", ");
}

// 3. Verificar palíndromo (convertendo para maiúsculas)
function ehPalindromo(str) {
    const texto = str.toUpperCase();
    const invertido = texto.split('').reverse().join('');
    return texto === invertido;
}

function mostrarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const resultado = ehPalindromo(palavra);
    document.getElementById("resultado-palindromo").textContent = 
        resultado ? "É um palíndromo!" : "Não é um palíndromo.";
}

// 4. Verificar tipo de triângulo
function tipoTriangulo(a, b, c) {
    // Verificar se é triângulo
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Triângulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triângulo isósceles";
        } else {
            return "Triângulo escaleno";
        }
    } else {
        return "Os valores não formam um triângulo";
    }
}

function mostrarTriangulo() {
    const t1 = Number(document.getElementById("t1").value);
    const t2 = Number(document.getElementById("t2").value);
    const t3 = Number(document.getElementById("t3").value);
    const resultado = tipoTriangulo(t1, t2, t3);
    document.getElementById("resultado-triangulo").textContent = resultado;
}
