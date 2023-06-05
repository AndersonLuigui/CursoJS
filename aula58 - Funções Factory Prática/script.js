function criaCalculadora(){
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

      pressionaEnter() {
            this.display.addEventListener('keyup', e => {    // keyCode===13 BOTÃO ENTER
                if (e.keyCode === 13) {                     
                    this.realizaConta();
                }
            });
        },  

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0,-1);   // slice(0,-1) 
        },

        realizaConta() {
           let conta = this.display.value;
           try {
            conta = eval(conta);

            if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                this.display.value = 'Dígite um valor';
               return;
            }

            this.display.value = String(conta);

           } catch(e) {
            alert('Conta inválida');
            return

           }
        },


        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                console.log(this);

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });


        },

        btnParaDisplay(valor){
            this.display.value += valor;  // CONCATERNANDO VALORES NO DISPLAY 
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();