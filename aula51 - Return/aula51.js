// return
// retorna um valor
// termina a função

// A PALAVRA return TEM A FUNÇÃO DE ATRIBUIR VALOR - MUITO CONFUNDEM O RETURN COM O console.log() MAS O CONSOLE LOG APENAS MOSTRA O VALOR




/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
}) */

/* function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Anderson', 'Luigui');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2); */





/* function falaFrase (comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo')); */



/* function duplica(n) {
    return n * 2;
}
function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}

console.log(quadriplica(485530)); */


// DIMINUINDO O CODIGO ABAIXO
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));


