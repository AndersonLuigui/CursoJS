//___________________ESTRUTURA DE REPETIÇÃO_______________________WHILE E DO WHILE______________
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;
let rand = random(min, max);

//WHILE CHECA A CONDIÇÃO E EXECUTA O CÓDIGO - ENQUANTO TRUE FAÇA ATÉ QUE SEJA FALSE
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

//_______________________________________________________________________________

// DO WHILE CHECA  A CONDIÇÃO POR ÚLTIMO - FAÇA ISSO EM SEGUIDA CHEQUE A CONDIÇÃO
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

