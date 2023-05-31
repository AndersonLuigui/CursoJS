// FUNÇÕES FACTORY (FUNCÇÃO FÁBRICA)
// CONSTRUCTOR FUNCTION (FUNÇÃO CONSTRUTORA)

function criaPessoa(nome, sobreonome, a, p){
    return {
        nome, sobreonome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobreonome}`;
        },

        fala(assunto = 'tem o índice de massa corporal de') {
            return assunto;
        },

        altura: a,
        peso: p,

        //SETTER
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreonome = valor.join();
            console.log(valor);
        },
        
        //GETTER
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Anderson', 'Luigui', 1.8, 76);
const p2 = criaPessoa('Neura', 'Batista', 1.6, 50);
const p3 = criaPessoa('João', 'Miguel', 1.4, 35);



console.log(p1.nomeCompleto, p1.fala(), p1.imc)
console.log(p2.nomeCompleto, p1.fala(), p2.imc)
console.log(p3.nomeCompleto, p1.fala(), p3.imc)