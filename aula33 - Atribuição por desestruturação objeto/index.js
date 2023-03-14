const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Luigui',
    idade: 25,
    endereco: {
        rua: 'Soe Q 19',
        numero: 7
    }
};

// const nome = pessoa.nome; // ATRIBUIÇÃO NORMAL

/* 
const { nome, sobrenome, idade, endereco } = pessoa; // ATRIBUIÇÃO POR DESESTRUTURAÇÃO
console.log(nome, sobrenome, endereco);  */
/* 
const { endereco: { rua, numero}, endereco } = pessoa; // EXTRAINDO O ENDEREÇO DO OBJETO PESSOA
console.log(rua, numero);  */

const { endereco: { rua: r, numero}, endereco } = pessoa; // ATRIBUINDO O VALOR DE RUA PARA R - MUDANDO O A VARIÁVEL
console.log(r, numero); 