const entrada = require('readline-sync')

Materiais = []

for (i = 1; i <= 4; i++) {
    const material = {
        nome: entrada.question(`Digite o nome do material ${i}: `),
        qtd: entrada.questionInt("Digite a quantidade atual do material: "),
        qtdmin: entrada.questionInt("Digite a quantidade minima do material: ")
    }
    

    Materiais.push(material)
 

    console.log("Material cadastrado!")
}

console.log("\nLista de Materiais:")

for (i = 0; i < Materiais.length; i++) {
    const material = Materiais[i]

    let situacao
    if (material.qtd < material.qtdmin) {
        situacao = "Repor Estoque"
    } else {
        situacao = "Estoque Ok"
    }

    console.log(`\nMaterial: ${material.nome}`)
    console.log(`Quantidade: ${material.qtd}`)
    console.log(`Estoque Minimo: ${material.qtdmin}`)
    console.log(`Situacao: ${situacao}`)
}