const fs = require("fs");

const nomeDoArquivo = "equipamentos.json";

if (fs.existsSync(nomeDoArquivo)) {

    const dados = fs.readFileSync(nomeDoArquivo, "utf8");

    const equipamentos = JSON.parse(dados);

    let contador = 0;

    console.log("=== EQUIPAMENTOS PARADOS ===");

    for (let i = 0; i < equipamentos.length; i++) {

        if (!equipamentos[i].operacional) {

            console.log(
                `${equipamentos[i].nome} - ${equipamentos[i].setor}`
            );

            contador++;
        }
    }

    console.log(`\nTotal de equipamentos parados: ${contador}`);

} else {
    console.log(`O arquivo '${nomeDoArquivo}' não foi encontrado.`);
}