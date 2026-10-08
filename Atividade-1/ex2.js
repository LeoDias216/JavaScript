const entrada = require('readline-sync')

const nomeMaterial = entrada.question("Digite o nome do material: ")
const quantidade = entrada.questionInt("Digite a quantidade comprada: ")
const preco = entrada.questionFloat("Digite o preco do material: ")

console.log("\n-- RELATORIO DE COMPRA --")
console.log(`Material adquirido: ${nomeMaterial}`)
console.log(`Quantidade: ${quantidade}`)
console.log(`Preco: ${preco}`)
console.log(`Total da compra: ${(quantidade * preco).toFixed(2)}`)