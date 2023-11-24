/* OBJETOS LITERAIS SÃO OS QUE UTILIZAM A SINTAXE NORMAL
    EXEMPLO:  ` `     " "    function()    [ ]     { }      

*/


const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Luigui',

};

/* console.log(pessoa['nome']); // NOTAÇÃO DE COLCHETES
console.log(pessoa['sobrenome']);


console.log(pessoa.nome); // NOTAÇÃO DE PONTOS
console.log(pessoa.sobrenome);
 */

/* const chave = 'nome';
console.log(pessoa[chave]); */

/* // NOTAÇÃO DE PONTO - OBJETO CONSTRUTOR
const pessoa1 = new Object();
pessoa1.nome = 'Neura';
pessoa1.sobrenome = 'Batista';
console.log(pessoa1);
 */
/* // OBJETO LITERAL
const pessoa2 = {
    nome: 'João',
    sobrenome: 'Miguel'
};
console.log(pessoa2) */

const pessoa1 = new Object();
pessoa1.nome = 'Anderson';
pessoa1.sobrenome = 'Luigui';

delete pessoa1.nome;
console.log(pessoa1)