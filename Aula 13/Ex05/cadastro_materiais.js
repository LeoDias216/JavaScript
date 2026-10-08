const fs = require('fs');

console.log("-- REGISTRO DE SENSORES --");

const materiais = [
{ codigo:200, descricao:"Barra de Ouro", qtd:5, valorUnitario:500.00 },
{ codigo:300, descricao:"Barra de Cobre", qtd:53, valorUnitario:150.00 },
{ codigo:400, descricao:"Barra de Prata", qtd:20, valorUnitario:200.00 },
{ codigo:500, descricao:"Barra de Titanio", qtd:18, valorUnitario:300.00 }
]

const dadosParaGravar = JSON.stringify(materiais, null, 2)
const nomeDoArquivo = "materiais.json"

fs.writeFileSync(nomeDoArquivo, dadosParaGravar)

console.log(`A gravação de dados no arquivo '${nomeDoArquivo}' foi um sucesso!`)