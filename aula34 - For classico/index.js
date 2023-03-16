// ESTRUTURA DE REPETICÃOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


/* console.log('linha 0');
console.log('linha 1');
console.log('linha 3');
console.log('linha 4');
console.log('linha 5'); */


// i = INDEX
// VARIÁVEL I + CONDIÇÃO + CONTADOR
/* for (let i = 0; i <= 10; i++) {   // ESTRUTURA DE REPETIÇÃO CLÁSSICA - NÃO TEM PONTO E VÍRGULA NO FINAL
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
} */


// EXEMPLO CLASSICO COM ARRAYS
const frutas = ['Maçã', 'Goiaba', 'Laranja', 'Melão'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}