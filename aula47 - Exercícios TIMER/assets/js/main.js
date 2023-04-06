const relogio = document.querySelector('.relogio'); // SELECIONANDO BOTÕES RELÓGIO
const iniciar = document.querySelector('.iniciar'); // SELECIONANDO BOTÕES RELÓGIO
const pausar = document.querySelector('.pausar'); // SELECIONANDO BOTÕES RELÓGIO
const zerar = document.querySelector('.zerar'); // SELECIONANDO BOTÕES RELÓGIO

iniciar.addEventListener('click', function(event) { // ESTA LINHA DE CÓDIGO PEGA O EVENTO 'CLICK' E ADICIONA A FUNCÃO
    relogio.innerHTML = "Anderson Vc clicou no INICIAR";
})


pausar.addEventListener('click', function(event) { // ESTA LINHA DE CÓDIGO PEGA O EVENTO 'CLICK' E ADICIONA A FUNCÃO
    alert("Você clicou no botão pausar");
})


zerar.addEventListener('click', function(event) { // ESTA LINHA DE CÓDIGO PEGA O EVENTO 'CLICK' E ADICIONA A FUNCÃO
    alert("Você clicou no botão zerar");
})


// _________________ATENÇÃO_____________PARA RESSALTAR__________innerHTML___________
// O CÓDIGO relógio.innerHTML = "texto qualquer" SENDO O RELÓGIO A CLASSE NO HTML   |
// QUER QUER MUDAR OU SEJA O innerHMTML ou innerTEXT ALTERA O QUE ESTÁ ESCRITO      |
// NO HTML                                                                          |
//__________________ATENÇÃO_____________PARA RESSALTAR__________innerHTML___________|
