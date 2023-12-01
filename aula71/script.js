// defineProperty defineProperties

function Produto(nome, preco, estoque) {
/*     this.nome = nome;
    this.preco = preco;
 */

/*     Object.defineProperty(this, 'estoque',{
        enumerable: false, // MOSTRA A CHAVE
        value: estoque, // MOSTRA O VALOR
        writable: false, // PODE ALTERAR SE FOR TRUE SIM E SE FOR FALSE NÃO
        configurable: false // CONFIGURÁVEL SE TRUE NÃO CONFIGURÁVEL SE FALSE
    }); */

    Object.defineProperties(this, {
        nome: {
            enumerable: false, // MOSTRA A CHAVE
            value: nome, // MOSTRA O VALOR
            writable: false, // PODE ALTERAR SE FOR TRUE SIM E SE FOR FALSE NÃO
            configurable: false // CONFIGURÁVEL SE TRUE NÃO CONFIGURÁVEL SE FALSE

        },
        preco: {
            enumerable: false, // MOSTRA A CHAVE
            value: preco, // MOSTRA O VALOR
            writable: false, // PODE ALTERAR SE FOR TRUE SIM E SE FOR FALSE NÃO
            configurable: false // CONFIGURÁVEL SE TRUE NÃO CONFIGURÁVEL SE FALSE

        },
    })

}

/* const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
delete p1.estoque;
console.log(Object.keys(p1));
 */

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}
