const entrada = require('readline-sync');

const qtdPorHora = entrada.questionInt("Digite a quantidade de pecas produzidas por hora: ");
const horasTurno = entrada.questionInt("Digite as horas trabalhadas por turno: ");
const prodTotal = qtdPorHora * horasTurno;

console.log("\n=== RELATORIO DE PRODUCAO ===");
console.log(`Pecas produzidas por hora ${qtdPorHora}`);
console.log(`Horas do turno: ${horasTurno}`);
console.log(`Total produzido: ${prodTotal}`);