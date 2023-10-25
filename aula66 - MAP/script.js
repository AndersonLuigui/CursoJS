// MAP 
// SIMILAR AO FILTRER O MAP RETORNA O ARRAY ALTERADO
// MAP SEMPRE VAI TER O MESMO TAMANHO DO ARRAY ORIGINAL
// - diferentemente do filter que pode encurtar





// DOBRE OS NÚMEROS
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* const numerosDobrados = numeros.map(values => values * 2);
console.log(numerosDobrados); */


//PARA CADA ELEMENTO:
// RETORNE APENAS UMA STRING COM O NOME DA PESSOA
// REMOVA APENAS A CHAVE "NOME" DO OBJETO
// ADICIONE UMA CHAVE ID EM CADA OBJETO
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const stringNome = pessoas.map(obj => obj.nome);
console.log(stringNome);

const removeChaveNome = pessoas.map(obj =>  ({idade: obj.idade}));
console.log(removeChaveNome);

const chaveId = pessoas.map((obj,indice) => obj.id = indice)

console.log(chaveId);


console.log(pessoas);

