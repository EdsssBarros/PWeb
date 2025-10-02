alert("PEDRA, PAPEL OU TESOURA\n\nClique em OK para começar a jogar");

var escolha1 = prompt("Digite sua escolha: pedra, papel ou tesoura");

var escolhaComputador = Math.random(); 

if (escolhaComputador <= 0.33) {
    escolhaComputador = "pedra";
} else if (escolhaComputador <= 0.66) {
    escolhaComputador = "papel";
} else {
    escolhaComputador = "tesoura";
}

alert("Sua escolha: " + escolha1 + "\nEscolha do Computador: " + escolhaComputador);

if (escolha1 == escolhaComputador) {
    alert("Empate!");
} else if (
    (escolha1 == "pedra" && escolhaComputador == "tesoura") ||
    (escolha1 == "papel" && escolhaComputador == "pedra") ||
    (escolha1 == "tesoura" && escolhaComputador == "papel")
) {
    alert("Você ganhou!");
} else {
    alert("Você perdeu!");
}

console.log("Sua escolha: " + escolha1);
console.log("Escolha do Computador: " + escolhaComputador);
console.log("Número aleatório gerado: " + escolhaComputador);