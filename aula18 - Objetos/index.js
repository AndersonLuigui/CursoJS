/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Anderson', 'Luigui', 25);
const pessoa3 = criaPessoa('Neura', 'Batista', 28);
const pessoa4 = criaPessoa('João', 'Miguel', 8);
console.log(`Estava caminhando quando encontrei o ${pessoa1.nome} ${pessoa1.sobrenome}, logo reparei que recentemente tinha feito uma festa em comemoração aos ${pessoa1.idade} anos de idade`);
console.log(`se não fosse pela ${pessoa3.nome} e pelo ${pessoa4.nome} eu não teria o conhecido`);
console.log(pessoa1,pessoa3,pessoa4);  */

const pessoa1 = {
    nome: 'Anderson',
    sobrenome: 'Luigui',
    idade: 25,


    fala (  ) {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`Minha idade atual é ${this.idade} anos de idade`);
    },


    incrementaIdade() {
        ++this.idade; // ++ OPERADOR DE INCREMENTO - PODE SER ADICIONADO ANTES OU DEPOISO this.idade++
    }
}; 

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();