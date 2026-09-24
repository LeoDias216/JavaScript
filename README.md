# JavaScript

Projeto de estudos em JavaScript com exercícios, revisão e prática de persistência de dados.

## Estrutura do projeto

```text
JavaScript/
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── node_modules/                # dependências instaladas pelo npm
├── Atividade-1/
│   ├── ex1.js
│   ├── ex2.js
│   ├── ex3.js
│   ├── ex4.js
│   ├── ex5.js
│   └── ex6.js
├── Persistencia_Dados/
│   ├── Exemplo/
│   │   ├── exemplo_gravacao.js
│   │   └── maquinas.json
│   └── Exercicios/
│       ├── Ex1/
│       │   ├── exercicio1_sensores.js
│       │   └── sensores.json
│       ├── Ex2/
│       └── Ex3/
└── Revisão/
    ├── ex1.js
    ├── ex2.js
    ├── ex3.js
    └── ex4.js
```

## Descrição das pastas

- `Atividade-1/` - exercícios de lógica e JavaScript básico
- `Persistencia_Dados/` - atividades sobre leitura e gravação de dados em arquivos JSON
  - `Exemplo/` - exemplo de persistência simples
  - `Exercicios/Ex1/` - exercício de sensores com leitura e escrita em JSON
  - `Ex2/` e `Ex3/` - futuras práticas da disciplina
- `Revisão/` - exercícios de revisão dos conceitos estudados

## Arquivos principais

- `package.json` - configuração do projeto e dependências
- `package-lock.json` - lockfile do npm
- `README.md` - documentação do projeto
- `.gitignore` - arquivos ignorados pelo Git

## Como executar

Para rodar qualquer exercício, utilize o Node.js:

```bash
node Atividade-1/ex1.js
node Persistencia_Dados/Exemplo/exemplo_gravacao.js
node Persistencia_Dados/Exercicios/Ex1/exercicio1_sensores.js
node Revisão/ex1.js
```

## Requisitos

- Node.js instalado
- npm instalado

## Objetivo

Praticar conceitos de:

- JavaScript básico
- manipulação de entrada e saída
- estruturas condicionais e laços
- leitura e gravação de arquivos JSON
- revisão de lógica de programação

## Observação

A pasta `node_modules/` foi criada automaticamente pelo npm e não é parte do código-fonte do projeto.
