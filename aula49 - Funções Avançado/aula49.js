// DECLARAÇÃO DE FUNÇÃO - Function Hoisting
function falaOi() {
    console.log('Oe');
}
falaOi();

// First-class objects (OBJETOS DE PRIMEIRA CLASSE)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo')
    funcao();
} 
executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
    console.log('Souo uma arrow function');
}
funcaoArrow();

// Dentro de um objeto eu posso ter uma função
const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
}
obj.falar();