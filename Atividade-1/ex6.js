const entrada = require('readline-sync')

let soma = 0

for (let i = 1; i <= 5; i++) {
    soma += entrada.questionFloat(`Digite o valor da medicao ${i}: `)
}
const media = soma / 5
console.log(`Soma: ${soma}`)
console.log(`Media: ${media.toFixed(2)}`)