// ATIVIDADE 1:

// • Quantos objetos existem no array?
// R: 4 objetos.

// • Qual propriedade representa o identificador único?
// R: O id.

// • Qual é o tipo de dado do valor da propriedade id?
// R: Um Int.

// • Quais máquinas estão no setor Usinagem?
// R: O Torno C e a Fresa D.



// ATIVIDADE 2:

// const fs = require("fs");

// const texto = fs.readFileSync("maquinas.json", "utf8");
// console.log(typeof texto);
// console.log(texto);

// A mensagem de erro foi: Error: ENOENT: no such file or directory, open 'C:\Users\51801105804.SESISENAI.000\Desktop\JavaScript\laboratorio-read\inexistente.json'



// ATIVIDADE 3:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// console.log(Array.isArray(maquinas));
// console.log(maquinas.length);
// console.log(maquinas[0].nome);
// console.log(maquinas[3].nome);
// console.log(maquinas[1].setor)



// ATIVIDADE 4:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// maquinas.forEach((maquina, indice) => {
//     console.log(`${indice + 1}. ${maquina.nome} - ${maquina.setor} - ${maquina.status}`);
// });



// ATIVIDADE 5:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// // const procurada = maquinas.find(maquina => maquina.id === 2);
// // console.log(procurada);

// const procurada = maquinas.find(maquina => maquina.id === 2);
// console.log(procurada); // undefined

// if (procurada !== undefined) {
// console.log(procurada.nome);
// } else {
// console.log("Máquina não encontrada.");
// }



// ATIVIDADE 6:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// const emManutencao = maquinas.filter(
//     maquina => maquina.setor === "Montagem" // Usinagem foram 2 objetos e Montagem foram 1
// );

// console.log(emManutencao.length);
// console.log(emManutencao);

// const paradas = maquinas.filter(maquina => maquina.status === "Parada");
// console.log(paradas); // []
// console.log(paradas.length); // 0



// ATIVIDADE 7:

// forEach() - Executa uma função por item
// find() - Retorna o primeiro item que corresponde
// filter() - Seleciona todos os itens que correspondem

// Questão para reflexão: se a indústria precisa listar todas as máquinas com defeito, find() seria a
// melhor escolha? Explique por quê.

// R: O melhor seria o filter(), já que ele traria todas as máquinas com defeito e não apenas a primeira que encontrasse, como o find() faz.



// ATIVIDADE 8:

// ENOENT: arquivo não encontrado
// Confira o nome e a localização do arquivo. Execute o comando no terminal dentro da pasta que contém o JSON; confira também a extensão.

// SyntaxError no JSON.parse()
// Abra o JSON e confira aspas duplas, vírgulas e chaves. Utilize um formato JSON válido antes de tentar converter.

// Cannot read properties of undefined
// Uma busca find() pode não ter retornado nada. Verifique o resultado antes de acessar propriedades.

// filter() não encontra nada
// Confira exatamente o texto de comparação: maiúsculas, minúsculas, acentos e espaços fazem diferença.

// Resultado inesperado ao comparar IDs
// O número 2 é diferente da string "2" ao utilizar ===. Verifique os tipos com typeof.

// readFileSync() trava a execução durante a leitura
// É uma operação síncrona. Funciona bem neste laboratório, mas não é a opção ideal para leituras frequentes em servidores com múltiplas requisições.



// ATIVIDADE 9:

// const fs = require("fs");

// try {
//     const texto = fs.readFileSync("inexistente.json", "utf8");
//     const maquinas = JSON.parse(texto);
//     console.log(`Registros carregados: ${maquinas.length}`);
// } catch (erro) {
//     console.log("Não foi possível carregar os dados.");
//     console.log(erro.message);
// }



// ATIVIDADE 10:

// Desafio A - Fundamental. Exiba uma linha para cada máquina no padrão ID | Nome | Status. Utilize o array carregado do JSON.

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// maquinas.forEach((maquina) => {
//     console.log(`${maquina.id} | ${maquina.nome} | ${maquina.status}`)
// });


// Desafio B - Intermediário. Leia um ID de uma variável, localize a máquina e mostre o setor. Se não existir, apresente uma mensagem amigável.

// teste = 3

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// if (teste === 3) {
//     const buscar = maquinas.find(maquina => maquina.id === 3)
//     if (buscar !== undefined) {
//         console.log(`${buscar.nome} | ${buscar.setor}`);
//     } else {
//         console.log("Máquina não encontrada.");
//     }
// } else {
//     console.log("ID inserido inválido")
// }

// Desafio C - Intermediário. Crie uma variável com o nome de um setor. Exiba quantas máquinas pertencem a ele e os nomes encontrados.

// const setorFixo = "Usinagem"

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// let contador = 0
// maquinas.forEach((maquina) => {
//     if (maquina.setor === setorFixo) {
//         console.log(`${maquina.nome}`)
//         contador ++
//     }
// });
// console.log(`Máquinas desse setor: ${contador}`)

// Desafio D - Avançado. Crie uma função que receba um status por parâmetro e devolva o array filtrado. Teste com status existente e inexistente.

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// function filtrarStatus(status) {
//     return maquinas.filter((maquina) => {
//         return maquina.status === status;
//     });
// }

// console.log("Máquinas com status Ativa:");
// console.log(filtrarStatus("Ativa"));

// console.log("Máquinas com status Manutenção:");
// console.log(filtrarStatus("Manutenção"));


// Desafio E - Transferência. Abra o projeto oficial da atividade no Classroom e identifique quais estruturas e métodos deste laboratório são úteis para implementar as funções pedidas. Não copie o laboratório sem adaptar ao formato dos dados reais.

// R: Os métodos que aprendi hoje e que acredito serem úteis nas atividades são forEach(), find() e filter(), uma vez que cada um deles serve para manipular informações de uma lista.