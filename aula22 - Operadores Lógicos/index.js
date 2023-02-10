/*||||||||||||||||||||||||||||||||||||||||||||||||||||   OPERADORES LÓGICOS   ||||||||||||||||||||||||||||||||||||||||||||||||||||

&& = AND = E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE CASO CONTRÁRIO RETORNARÁ FALSE 
|| = OR = OU -> SE QUALQUER UMA FOR TRUE O JS RETORNARÁ TRUE - SÓ RETORNA FALSE SE TODAS FOREM FALSE
! = NOT = NÃO -> SIMPLESMENTE INVERTE UMA EXPRESSÃO

*/

const expressaoAnd = (true && true && true && true);
console.log(expressaoAnd);

const expressaoOr = true || false || false || false;
console.log(expressaoOr); 


const usuario = 'Anderson'; // FORM USUÁRIO DIGITOU
const senha = '123456'; // FORM USUÁRIO DIGITOU 


//                       TRUE                          TRUE 
const vaiLogar = usuario === 'Anderson' && senha === '123456';
console.log(vaiLogar);

console.log(!true); // EXEMPLO DO OPERADOR LÓGICO DE NEGAÇÃO (INVERTE O VALOR)


