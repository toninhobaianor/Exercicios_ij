const prompt_comand = require('prompt-sync')({sigint: true});

const nome = prompt_comand('Digite seu nome: ');
console.log('Olá, ${nome}!');