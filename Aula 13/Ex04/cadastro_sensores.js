const fs = require('fs');

console.log("-- REGISTRO DE SENSORES --");

const sensores = [
{ codigo:140, tipo:"Temperatura", valor:32, unidade:"°C", status:true },
{ codigo:150, tipo:"Pressão", valor:6, unidade:"bar", status:false },
{ codigo:160, tipo:"Luz", valor:500, unidade:"lux", status:true },
{ codigo:170, tipo:"Umidade", valor:60, unidade:"%", status:true },
{ codigo:180, tipo:"Gas", valor:150, unidade:"ppm", status:false }
]

const dadosParaGravar = JSON.stringify(sensores, null, 2);
const nomeDoArquivo = "monitoramento.json";

fs.writeFileSync(nomeDoArquivo, dadosParaGravar);

console.log(`\nDados dos sensores gravados com sucesso no arquivo '${nomeDoArquivo}'.`)