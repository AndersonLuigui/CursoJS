/*________________________________________________CASO__PERFEITO__PARA__UTILIZAR__O__SWITCH__CASE________________________________________________ 


const data = new Date('2023-07-28 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if ( diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if ( diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if ( diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if ( diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if ( diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if ( diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
}

console.log(diaSemana, diaSemanaTexto);

*/


const data = new Date('2023-07-28 00:00:00');
const diaSemana = data.getDay();
//let diaSemana = 7;
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break;
}


console.log(diaSemana, diaSemanaTexto);