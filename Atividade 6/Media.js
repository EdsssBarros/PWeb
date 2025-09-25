const nome = prompt("Nome:");

const nota1 = prompt("Nota 1:");
const nota2 = prompt("Nota 2:");
const nota3 = prompt("Nota 3:");

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3.0;

alert("Média: " + media.toFixed(2));

const num1 = prompt("Número 1:");
const num2 = prompt("Número 2:");

const a = parseFloat(num1) + parseFloat(num2);
const b = parseFloat(num1) - parseFloat(num2);
const c = parseFloat(num1) * parseFloat(num2);
const d = parseFloat(num1) / parseFloat(num2);
const e = parseFloat(num1) % parseFloat(num2);

alert(
    "Soma: " +
    a +
    "\nSubtração: " +
    b +
    "\nProduto: " +
    c +
    "\nDivisão: " +
    d.toFixed(2) +
    "\nResto: " +
    e
);