/* REGRAS E BOAS PRÁTICAS CONST

1 - NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS
2 - CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS
3 - NÃO POSSO CRIAR UM NOME DE UM CONSTANTE COM UM NÚMERO
4 - AS VARIÁVEIS NÃO PODEM CONTER ESPAÇOS OU TRAÇOS - PARA ISSO UTILIZAMOS O CAMELCASE = let nomeClienteLoja = "Otávio"
5 - O JAVASCRIPT É CASE SENSITIVE = LETRAS MAIÚSCULAS E MINÚSCULAS INTERFEREM
6 - NÃO PODEMOS MODIFICAR O VALOR DE UMA CONSTANTES
7 - NÃO UTILIZE O VAR, UTILIZE O CONST.
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado)
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado)

// AO INVÉS DE MODIFICAR A CONSTANTE O IDEAL SERIA EVOLUIR ELA COMO NO EXEMPLO ACIMA

console.log(typeof primeiroNumero) // função typeof mostra a tipagem do valor tendo em vista que o js é uma linguagem de tipagem automática

