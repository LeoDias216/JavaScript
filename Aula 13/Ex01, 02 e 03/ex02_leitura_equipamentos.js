const fs = require('fs');

const nomeDoArquivo = "equipamentos.json";

if (fs.existsSync(nomeDoArquivo)) {

    const dados = fs.readFileSync(nomeDoArquivo, "utf8");

    const equipamentos = JSON.parse(dados);

    equipamentos.forEach(equipamento => { // A seta => junto com o .forEach serve para passar por cada equipamento

        const status = equipamento.operacional ? "OPERACIONAL" : "PARADA"; // Se for verdadeiro, usamos ?, se for falso, usamos :

        console.log(`Código: ${equipamento.codigo}`);
        console.log(`Equipamento: ${equipamento.nome}`);
        console.log(`Setor: ${equipamento.setor}`);
        console.log(`Status: ${status}`);
        console.log("-------------------------");

    });

} else {
    console.log(`O arquivo '${nomeDoArquivo}' não foi encontrado.`);
}