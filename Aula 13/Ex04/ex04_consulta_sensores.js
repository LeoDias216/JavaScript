const fs = require('fs');

const nomeDoArquivo = "monitoramento.json";

if (fs.existsSync(nomeDoArquivo)) {

    const dados = fs.readFileSync(nomeDoArquivo, "utf8");

    const sensores = JSON.parse(dados);

    console.log("-- TODOS OS SENSORES --");

    for (let i = 0; i < sensores.length; i++) {

        console.log(`Código: ${sensores[i].codigo}`);
        console.log(`Tipo: ${sensores[i].tipo}`);
        console.log(`Valor: ${sensores[i].valor}`);
        console.log(`Unidade: ${sensores[i].unidade}`);
        console.log(`Status: ${sensores[i].status}`);
        console.log("-------------------------");
    }

    console.log("-- SENSORES EM ALERTA --");

    let contador = 0;

    for (let i = 0; i < sensores.length; i++) {

        if (!sensores[i].status) {

            console.log(`${sensores[i].tipo} - ${sensores[i].valor} ${sensores[i].unidade}`);

            contador++;
        }
    }

    console.log(`\nTotal de sensores em alerta: ${contador}`);

} else {

    console.log("O arquivo monitoramento.json não foi encontrado.");

}