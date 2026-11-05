// PROJETO DO ALUNO - complete as funções abaixo.
// Execute com: npm start
const fs = require('node:fs');
const caminho = require('node:path');
const ARQUIVO = caminho.join(__dirname, 'maquinas.json');

function carregarMaquinas() {
  const texto = fs.readFileSync(ARQUIVO, 'utf8');
    const maquinas = JSON.parse(texto);

    return maquinas;

  
  // throw new Error('Implementar carregarMaquinas');
}

// TODO 1: ler ARQUIVO com fs.readFileSync(ARQUIVO, 'utf8').
// TODO 2: converter o texto JSON em array com JSON.parse(...).
// TODO 3: retornar o array.

function listarMaquinas(maquinas) {
   maquinas.forEach((maquina) => {
        console.log('ID:', maquina.id);
        console.log('Nome:', maquina.nome);
        console.log('Status:', maquina.status);
        console.log('-----------------------------');
    });

  // throw new Error('Implementar listarMaquinas');
}

// TODO 4: percorrer com forEach e apresentar id, nome e status.

function buscarPorId(maquinas, id) {
   return maquinas.find((maquina) => maquina.id === id);
  
  // throw new Error('Implementar buscarPorId');
}

// TODO 5: encontrar com find(). O ID recebido deve ser número.

function filtrarPorStatus(maquinas, status) {
  return maquinas.filter((maquina) => maquina.status === status);
  // throw new Error('Implementar filtrarPorStatus');
}

// TODO 6: retornar um novo array com filter().

function filtrarPorSetor(maquinas, setor) {
  return maquinas.filter((maquina) => maquina.setor === setor);
  // throw new Error('Implementar filtrarPorSetor');
}

// DESAFIO: retornar máquinas do setor informado.


function executar() {
    try {
        console.log('Sistema de consultas industriais - CRUD READ');

        const maquinas = carregarMaquinas();

        listarMaquinas(maquinas);

        console.log('Busca por ID 3:');
        console.log(buscarPorId(maquinas, 3));

        console.log('Busca por ID 99:');
        console.log(buscarPorId(maquinas, 99));

        console.log('Máquinas em manutenção:');
        console.log(filtrarPorStatus(maquinas, 'manutencao'));

        console.log('Máquinas da Usinagem:');
        console.log(filtrarPorSetor(maquinas, 'Usinagem'));

    } catch (erro) {
        console.error('Erro ao executar o programa:', erro.message);
    }
}

// TODO 7: chamar carregarMaquinas, listarMaquinas e fazer consultas.
// Exemplos a testar: id 3, id 99, status 'manutencao'.

if (require.main === module) executar();
module.exports = { carregarMaquinas, listarMaquinas, buscarPorId, filtrarPorStatus, filtrarPorSetor };





// CRUD READ - Sistema de consultas de maquinas industriais
// Coloque este arquivo na mesma pasta de maquinas.json.
// Execute: node app.js

// const fs = require('node:fs');
// const caminho = require('node:path');
// const ARQUIVO = caminho.join(__dirname, 'maquinas.json');

// // 1. Leitura do arquivo JSON e conversao em array de objetos
// function carregarMaquinas() {
//   const conteudo = fs.readFileSync(ARQUIVO, 'utf8');
//   const maquinas = JSON.parse(conteudo);

//   if (!Array.isArray(maquinas)) {
//     throw new Error('O arquivo JSON deve conter uma lista de maquinas.');
//   }

//   return maquinas;
// }

// // 2. Mostra as maquinas cadastradas no terminal
// function listarMaquinas(maquinas) {
//   maquinas.forEach((maquina) => {
//     console.log(`${maquina.id} | ${maquina.nome} | ${maquina.status}`);
//   });
// }

// // 3. Busca a primeira maquina com o ID informado
// function buscarPorId(maquinas, id) {
//   return maquinas.find((maquina) => maquina.id === id);
// }

// // 4. Retorna todas as maquinas com o status informado
// function filtrarPorStatus(maquinas, status) {
//   return maquinas.filter((maquina) => maquina.status === status);
// }

// // 5. Retorna todas as maquinas do setor informado
// function filtrarPorSetor(maquinas, setor) {
//   return maquinas.filter((maquina) => maquina.setor === setor);
// }

// // 6. Executa consultas de exemplo
// function executar() {
//   try {
//     const maquinas = carregarMaquinas();

//     console.log('\n=== TODAS AS MAQUINAS ===');
//     listarMaquinas(maquinas);

//     console.log('\n=== BUSCA PELO ID 3 ===');
//     console.log(buscarPorId(maquinas, 3) ?? 'Maquina nao encontrada.');

//     console.log('\n=== BUSCA PELO ID 99 ===');
//     console.log(buscarPorId(maquinas, 99) ?? 'Maquina nao encontrada.');

//     console.log('\n=== MAQUINAS EM MANUTENCAO ===');
//     console.log(filtrarPorStatus(maquinas, 'manutencao'));

//     console.log('\n=== MAQUINAS DO SETOR USINAGEM ===');
//     console.log(filtrarPorSetor(maquinas, 'Usinagem'));
//   } catch (erro) {
//     console.error('Erro ao ler ou consultar o arquivo:', erro.message);
//     process.exitCode = 1;
//   }
// }

// if (require.main === module) {
//   executar();
// }

// // Permite importar as funcoes no arquivo testes.js
// module.exports = {
//   carregarMaquinas,
//   listarMaquinas,
//   buscarPorId,
//   filtrarPorStatus,
//   filtrarPorSetor,
// };