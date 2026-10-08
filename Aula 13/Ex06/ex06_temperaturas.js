const fs = require("fs");

try {

    const dados = fs.readFileSync("temperaturas.json", "utf8");

    const temperaturas = JSON.parse(dados);

    for (let i = 0; i < temperaturas.length; i++) {

        if (temperaturas[i] <= 350) {

            console.log(`Leitura: ${temperaturas[i]} °C - NORMAL`);

        } else {

            throw new Error(`Temperatura de ${temperaturas[i]} °C, CUIDADO!.`);

        }
    }

} catch (erro) {

    console.log("\nALERTA:");
    console.log(erro.message);

}

