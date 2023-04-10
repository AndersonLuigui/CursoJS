function relogio() {
    function criaHoraDosSegundos(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    }
  
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
  
    function iniciaRelogio() {
      timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
      }, 1000);
    }
  
    document.addEventListener('click', function(e) {
      const el = e.target;
  
      if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
      }
  
      if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
      }
  
      if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
      }
    });
  }
  relogio();




// _________________ATENÇÃO_____________PARA RESSALTAR__________innerHTML___________
// O CÓDIGO relógio.innerHTML = "texto qualquer" SENDO O RELÓGIO A CLASSE NO HTML   |
// QUER QUER MUDAR OU SEJA O innerHMTML ou innerTEXT ALTERA O QUE ESTÁ ESCRITO      |
// NO HTML                                                                          |
//__________________ATENÇÃO_____________PARA RESSALTAR__________innerHTML___________|
