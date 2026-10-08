const fs = require('fs');

const nomeDoArquivo = "materiais.json";

if (fs.existsSync(nomeDoArquivo)) {

    const dados = fs.readFileSync(nomeDoArquivo, "utf8");

    const materiais = JSON.parse(dados);

    let totalUnidades = 0;
    let valorTotal = 0;

    console.log("-- MATERIAIS CADASTRADOS --");

    for (let i = 0; i < materiais.length; i++) {

        const valorEstoque = materiais[i].qtd * materiais[i].valorUnitario;

        console.log(`Descrição: ${materiais[i].descricao}`);
        console.log(`Quantidade: ${materiais[i].qtd}`);
        console.log(`Valor unitário: R$ ${materiais[i].valorUnitario.toFixed(2)}`);
        console.log(`Valor em estoque: R$ ${valorEstoque.toFixed(2)}`);
        console.log("-------------------------");

        totalUnidades += materiais[i].qtd;
        valorTotal += valorEstoque;
    }

    console.log(`Total de unidades: ${totalUnidades}`);
    console.log(`Valor total do estoque: R$ ${valorTotal.toFixed(2)}`);

} else {

    console.log(`O arquivo '${nomeDoArquivo}' não foi encontrado.`);

}