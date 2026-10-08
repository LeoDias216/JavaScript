const entrada = require('readline-sync')

funcionarios = []

for (i = 1; i <= 5; i++) {
    const nomeFunc = entrada.question(`Digite o nome do funcionario ${i}: `)

    funcionarios.push({
        Funcionario: nomeFunc
    })

    console.log("Funcionario cadastrado!")
}
console.log("\nFuncionarios Cadastrados:")

for ( i = 0; i < funcionarios.length; i++) {
    console.log(`${i + 1} - ${funcionarios[i].Funcionario}`)
}