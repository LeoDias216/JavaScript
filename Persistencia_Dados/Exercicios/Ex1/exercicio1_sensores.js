const fs = require('fs')
console.log("---Registro de Sensores---")

const sensoresTemperaturaPressao = [
{codigo: 1234, tipo: "Temperatura", leituraAtual: 32.5, statusSensor: "Operando" },
{codigo: 5678, tipo: "Pressao", leituraAtual:10.2, statusSensor: "Operando" },
{codigo: 9012, tipo: "Temperatura", leituraAtual:55.1, statusSensor: "Alerta" }
]

const dadosParaGravar = JSON.stringify(sensoresTemperaturaPressao, null, 2)

const nomeDoArquivo = "sensores.json"
fs.writeFileSync(nomeDoArquivo, dadosParaGravar)
console.log("\nGravação de dados concluída, verifique o arquivo 'sensores.json'")