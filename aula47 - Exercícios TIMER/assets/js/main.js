function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}


// SELECIONANDO BOTÕES RELÓGIO____________________________________________________
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar'); 
const zerar = document.querySelector('.zerar'); 


// DEFININDO VARIÁVEIS PARA INÍCIO E TÉRMINO______________________________________
let segundos = 0;
let timer = 0;


// FUNÇÃO PRA INICIAR O RELÓGIO___________________________________________________
function iniciaRelogio() {
    const timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos); // DEIXANDO O CONTADOR NO FORMATO 00:00:01
    }, 1000);
}



// ESTA LINHA DE CÓDIGO PEGA O EVENTO 'CLICK' E ADICIONA A FUNCÃO___________________
iniciar.addEventListener('click', function(event) { 
    iniciaRelogio();
});

// ESTA LINHA DE CÓDIGO PEGA O EVENTO 'CLICK' E ADICIONA A FUNCÃO___________________
pausar.addEventListener('click', function(event) {
    clearInterval(timer);
});

// ESTA LINHA DE CÓDIGO PEGA O EVENTO 'CLICK' E ADICIONA A FUNCÃO___________________
zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    
});




// _________________ATENÇÃO_____________PARA RESSALTAR__________innerHTML___________
// O CÓDIGO relógio.innerHTML = "texto qualquer" SENDO O RELÓGIO A CLASSE NO HTML   |
// QUER QUER MUDAR OU SEJA O innerHMTML ou innerTEXT ALTERA O QUE ESTÁ ESCRITO      |
// NO HTML                                                                          |
//__________________ATENÇÃO_____________PARA RESSALTAR__________innerHTML___________|
