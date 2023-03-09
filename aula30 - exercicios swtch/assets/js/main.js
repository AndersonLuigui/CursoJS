// dia da semana + numero do dia + nome do mês + ano

const h1 = document.querySelector('.container h1');
const data = new Date;
h1.innerHTML = data.toString();

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return diasSemana[]; 
}


function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março','abril', 'maio','junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];


}


/* function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} `+
        `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`

    );

} */

h1.innerHTML = criaData(data);



// AGORA TODO ESTE CÓDIGO EM CIMA PODE SER RESUMIDO EM POUCAS LINHAS COMO ABAIXO >>

/* const h1 = document.querySelector('.container h1');
const data = new Date();


h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});  */