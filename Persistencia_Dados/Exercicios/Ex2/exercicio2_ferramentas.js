const entrada = require('readline-sync')
const fs = require('fs')

ferramentas = []

console.log("-- REGISTRO DE FERRAMENTAS --")
const qtdFerramentas = entrada.questionInt("Quantas ferramentas voce deseja cadastrar? ")

for (i = 1; i <= qtdFerramentas; i++) {
    let Nome = entrada.question(`Digite o nome da ferramenta ${i}: `)
    let Qtd = entrada.questionInt(`Digite a quantidade da ferramenta ${i}: `)
    let Custo = entrada.questionFloat(`Digite o custo da ferramenta ${i}: `)

    ferramentas.push({
        nome: Nome,
        quantidade: Qtd,
        custo: Custo
    })
}

fs.writeFileSync("ferramentas.json", JSON.stringify(ferramentas, null, 2))

console.log("Dados gravados com sucesso, consulte o arquivo 'ferramentas.json'")