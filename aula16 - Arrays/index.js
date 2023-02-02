

// AS STRINGS SÃO INDEXADAS 0123456...
const nome = 'Luiz Otávio';
console.log(nome[0]);

// OS ARRAYS SÃO INDEXADOS POR ELEMENTOS  0  1  2...
const alunos = ['Luiz','Maria','João', ];
console.log(alunos[2]);


// É POSSÍVEL ALTERAR UM ARRAY E TAMBÉM ACRESCENTAR MAIS AO ÍNDICE VEJA OS EXEMPLOS
alunos[0] = 'Eduardo';  // ALTERANDO O ÍNDICE 0
alunos[3] = 'Larissa'; // ACRESCENTANDO MAIS NOME AOS ÍNDICES


// FUNÇÃO QUE ACRESCENTA MAIS ÍNDICE
alunos[alunos.length] = 'Fernanda';  
alunos[alunos.length] = 'Roberto';
alunos[alunos.length] = 'Sheila';
alunos[alunos.length] = 'Rosana';


// FUNÇÃO QUE ACRESCENTA MAIS ÍNDICE
alunos.push('Abinadable');
alunos.push('Ferdinando');
alunos.push('Carolina');
alunos.push('Gabriel');


// FUNÇÃO PARA ADICIONAR STRINGS NO COMEÇO DOS ÍNDICES
alunos.unshift('Abinadable');
alunos.unshift('Sheila');


// ESSA FUNÇÃO EXCLUI O ELEMENTO FINAL DO ARRAY
alunos.pop();

// É POSSÍVEL SABER QUAL SABER QUAL ELEMENTO FOI REMOVIDO E ATRIBUÍLO A UMA VARIÁVEL
const removido = alunos.pop();
console.log(removido)


// REMOVE O PRIMEIRO ELEMENTO DE UMA ARRAY
const removidoComeco = alunos.shift();
console.log(alunos);
console.log(removidoComeco);

// DELETANDO ÍNDICE DE UM ARRAY
delete alunos[3];
console.log(alunos[3]);

// FATIANDO 
console.log(alunos.slice(0, 3));


// MOSTRA O TAMANHO DO ÍNDICE 
console.log(alunos.length)

console.log(typeof alunos);
console.log(alunos instanceof Array);



