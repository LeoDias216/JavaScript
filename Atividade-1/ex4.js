const entrada = require('readline-sync')

const temperatura = entrada.questionFloat("Digite a temperatura da maquina: ")

if (temperatura <= 60) {
    console.log("Normal")
} else if (temperatura > 60 && temperatura <= 80) {
    console.log("Atencao!")
} else {
     console.log("Temperatura Critica!")
}