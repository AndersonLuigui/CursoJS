/*

&& -> false $$ true -> false NO AND TODAS AS PREPOSIÇÕES TER QUE SER VERDADEIRAS PARA RETORNAR TRUE - SE UMA FOR FALSE ELA RETORNA FALSE


|| -> true && false -> NO OR QUALQUER EXPRESSÃO QUE FOR TRUE RETORNARÁ O PRIMEIRO (VALOR VERDADEIRO)

FALSY 

*false (LITERAL) TODOS ESTES VALORES SEMPRE RETORNARÃO FALSE EM JS - DIFERENTE DELES RETORNARÃO FALSY
0
'' "" ``
null / undefined
NaN

*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // QUANDOS TODAS FOREM FALSE RETORNARÁ O ULTIMO VALOR FALSO
