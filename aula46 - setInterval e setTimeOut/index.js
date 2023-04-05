function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false});
    
}

console.log(mostraHora());


function funcaoDoInterval() {
    console.log(mostraHora());
}


// setInterval(); CONFIGURA O INTERVALO DE TEMPO PRA QUE ALGUMA FUNÇÃO SEJA EXECUTADA EM DETERMINADO MOMENTO.
const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000); 

setTimeout(function() {     // setTimeout(); PARA DE EXECUTAR A FUNÇÃO setInterval();
    clearInterval(timer);

}, 3000);

setTimeout(function(){
    console.log('Olá mundo');
}, 5000);