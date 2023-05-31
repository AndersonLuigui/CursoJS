// IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function(idade, peso, altura){
    const sobrenome = 'Luigui';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log( criaNome('Anderson'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(25, 76, 1.80);