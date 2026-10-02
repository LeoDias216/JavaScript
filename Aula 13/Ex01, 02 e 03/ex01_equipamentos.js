const fs = require('fs');

console.log("-- REGISTRO DE EQUIPAMENTOS --");

const equipamentos = [
{ codigo: 10, nome: "Injetora de Plástico", setor: "Moldagem", operacional: true },
{ codigo: 11, nome: "Esteira Transportadora", setor: "Logística", operacional: true },
{ codigo: 12, nome: "Forno Industrial", setor: "Produção", operacional: false }
];

const dadosParaGravar = JSON.stringify(equipamentos, null, 2);
const nomeDoArquivo = "equipamentos.json";

fs.writeFileSync(nomeDoArquivo, dadosParaGravar);

console.log(`\nGravação de dados concluída!`);
console.log(`Verifique o arquivo '${nomeDoArquivo}' gerado na barra lateral do VS Code.`);