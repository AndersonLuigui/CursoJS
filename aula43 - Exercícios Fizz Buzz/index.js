/* 

ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNE O SEGUINTE:
NÚMERO É DIVISÍVEL POR 3 = FIZZ
NÚMERO É DIVISÍVEL POR 5 = BUZZ
NÚMERO É DIVISÍVEL POR 3 E 5 = FIZZBUZZ
NÚMERO NÃO É DIVISÍVEL POR 3 E 5 = RETORNA O PRÓPRIO NÚMERO
CHECAR SE O NÚMERO É REALMENTE UM NÚMERO = RETORNA O PRÓPRIO NÚMERO
USE A FUNÇÃO COM NÚMEROS DE 0 A 100

*/
 
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
}


console.log('a',fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i,fizzBuzz(i));
}