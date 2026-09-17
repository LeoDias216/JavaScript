const entrada = require('readline-sync')

const pcsPorCiclo = entrada.questionInt("Digite a quantidade de pecas produzidas por ciclo: ")

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const producao = ciclo * pcsPorCiclo
    console.log(`Ciclo ${ciclo}: ${producao} pecas acumuladas`)
}