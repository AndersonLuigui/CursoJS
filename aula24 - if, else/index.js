/*

ENTRE 0 - 11 - BOM DIA
ENTRE 12 - 17 - BOA TARDE
ENTRE 18 - 23 - BOA NOITE


--- O IF PODE SER USADO SOZINHO

--- O ELSE IF NÃO PODE SER UTILIZADO SOZINHO

--- SEMPRE QUE UTILIZO A PALAVRA ELSE PRECISA-SE DE UM IF ANTES

--- POSSO TER QUANTOS QUISER ELSEs E IFs EM MINHA CHECAGEM

--- SÓ POSSO TER UM ELSE NA CHECAGEM

--- PODEMOS USAR CONDIÇÕES SEM ELSE IF, UTILIZANDO APENAS IF E ELSE
*/

const hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia, ja raiou mais um dia vou cumprir minha missão');
} else if (hora >= 11 && hora <= 17) {
    console.log('Boa tarde, está uma linda tarde hoje');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite, está na hora de descansar');
} else {
    console.log('Olá');
}


const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair');
} else {
    console.log('Não vou sair');
}


let z = 1 + +'2' + '2';
console.log(z);