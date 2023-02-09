/*||||||||||||||||||||||||||||||||||||||||||||||||||||   OPERADORES LÓGICOS   ||||||||||||||||||||||||||||||||||||||||||||||||||||

&& = AND = E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE CASO CONTRÁRIO RETORNARÁ FALSE 
|| = OR = OU -> SE QUALQUER UMA FOR TRUE O JS RETORNARÁ TRUE - SÓ RETORNA FALSE SE TODAS FOREM FALSE
! = NOT = NÃO -> 

*/

const expressaoAnd = (true && true && true && true);
console.log(expressaoAnd);

const expressaoOr = true || false || false || false;
console.log(expressaoOr); 


const usuario = 'Anderson';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log();

