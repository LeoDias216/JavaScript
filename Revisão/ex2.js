const entrada = require('readline-sync')

let acumulador = 0

for (let i = 1; i <= 6; i++) {
    acumulador += entrada.questionFloat(`Digite o valor ${i}: `)
}
console.log(`A soma total foi de ${acumulador.toFixed(2)}`)
console.log(`A Media desses valores e de ${(acumulador / 6).toFixed(2)}`)