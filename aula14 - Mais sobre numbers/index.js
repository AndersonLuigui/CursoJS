let num1 = 1;
let num2 = 2.5;


console.log(num1.toString() + num2); 
/* CASO QUEIRA DEFINIR UMA VAR NUMERO 
PARA STRING A FIM DE CONTATENAR OU OUTRA OPERAÇÃO A CONVERSÃO É 
FEITA ATRAVÉS DO .toString() - NESSA OPERAÇÃO A CONVERSÃO É TEMPORÁRIA OU SEJA OCORRE APENAS NA LINHA */

// PARA A ALTERAÇÃO DEFINITIVA DA VARIÁVEL É FEITA DA SEGUINTE MANEIRA
// num1 = num1.toString;

// AINDA COM O toString É POSSÍVEL SABER O CÓDIGO BINÁRIO DO NÚMERO 
console.log(num1.toString(2)); //toString

// PARA ARREDONDAR ALGUM NÚMERO É USADO O .toFixed(2); sendo o 2 o número de casas decimais
let num3 = 10.545884644;
console.log(num3.toFixed(2)); //toFixed



