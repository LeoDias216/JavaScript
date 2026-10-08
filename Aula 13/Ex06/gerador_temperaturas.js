const fs = require("fs");

const temperaturas = [
    180,
    250,
    390
];

const dadosParaGravar = JSON.stringify(temperaturas, null, 2);

fs.writeFileSync("temperaturas.json", dadosParaGravar);

console.log("Temperaturas gravadas com sucesso!");