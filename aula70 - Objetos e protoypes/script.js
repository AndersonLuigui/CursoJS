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

/* const pessoa1 = new Object();
pessoa1.nome = 'Anderson';
pessoa1.sobrenome = 'Luigui';
pessoa1.idade= 26;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando o seu nome.`);
};


pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

 */






// FACTORY FUNCTIONS 
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Anderson', 'Luigui');
console.log(p1.nomeCompleto);




// CONSTRUCTOR FUNCTIONS
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Anderson','Luigui');
const p3 = new Pessoa('Maria','Fernanda');
console.log(p2);
console.log(p3);



