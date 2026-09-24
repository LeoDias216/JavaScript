const entrada = require('readline-sync')

const temperatura = entrada.questionFloat("Digite a Temperatura: ")

if (temperatura <= 60) {
    console.log(`A temperatura ${temperatura} °C esta Normal`)
} else if (temperatura <= 80) {
    console.log(`A temperatura ${temperatura} °C precisa de Atencao!`)
} else {
    console.log(`A temperatura ${temperatura} °C e Critica!`)
}