/* ________________________________________________OPERADOR TENÁRIOA____________________________________________________ */
 

const pontuacaoUsuario = 2000;

/* if (pontuacaoUsuario>=1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
 */


// OPERAÇÃO TENÁRIA
// (CONDIÇÃO) ? 'VALOR PARA VERDADEIRO' : 'VALOR PARA FALSO'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal'; // O MESMO CÓDIGO COMENTADO ACIMA DIMINUÍDO A UMA LINHA

const corUsuario = null;
const corPadrao = corUsuario || 'Pink';
console.log(nivelUsuario, corPadrao);


