
/* Caso queira por aspas em uma string fazer o seguinte abaixo */
let umaString = '"Texto com aspas" exemplo com aspas simples ou vice versa';
console.log(umaString);


// A BARRA INVERTIDA '\' ESCONDE OU EXIBE O CARACTERE DA DIREITA - VEJA O EXEMPLO
let outraString = "Exibindo e escondendo caracteres utilizando a barra invertida \"esconde aspas\" ";
console.log(outraString);


// O TEXTO STRING É INTERÁVEL - 0123456... VEJA ABAIXO
let outradaString = "exemplo vou pegar o quinto elemento";


// INTEREI E MOSTREI O QUINTO ELEMENTO CONTANDO DE 0 A 5 DA VARIÁVEL outradaString
console.log(outradaString[5]); 


 // DAR PARA FAZER O MESMO COM O COMANDO charAt() - OU SEJA ENCONTREI O ELEMENTO DA VARIÁVEL QUE ESTA NA POSIÇÃO 5
console.log(outradaString.charAt(5));   // CASO SEJA NEGATIVO OU MAIS ELEVADO MOSTRARÁ COMO UM ELEMENTO VAZIO ' '


// CASO O NÚMERO DO ÍNDICE 0123... SEJA NEGATIVO OU MAIS ELEVADO DO QUE O TAMANHO DA STRING O VALOR SERÁ underfined
console.log(outradaString[60]); 


// PARA ENCONTRAR O ÍNDICE DE UMA PALAVRA É UTILIZADO O index.of('palavranastring');
console.log(outradaString.indexOf('vou '));
console.log(outradaString.lastIndexOf('vou ')); // lastIndexOf FAZ O MESMO PORÉM DE TRÁS PRA FRENTE.


// length MOSTRA O TAMANHO DA STRING
console.log(outradaString.length); 


// PARA MOSTRAR A STRING MAIÚSCULA E MINÚSCULA UTILIZA-SE O toUpperCase e o toLowerCase
console.log(outradaString.toUpperCase());
console.log(outradaString.toLowerCase());


// PARA SABER OS ULTIMOS ELEMENTOS DA STRING UTILIZA-SE O slice
console.log(outradaString.slice('-3'));


// PARA MOSTRAR AS PALAVRAS DE UMA STRING UTILIZA-SE O split(' ') LEMBRANDO QUE O SPLIT RETIRA OS ESPAÇOS COM AS ASPAS
console.log(outradaString.split(' '));