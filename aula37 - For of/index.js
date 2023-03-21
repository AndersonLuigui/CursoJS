// FOR OF ___________________FOR OF_________________

const nomes = ['Anderson', 'Leandro', 'Neura'];


// FOR CLÁSSICO - GERALMENTE COM ITERÁVEIS (ARRAY OU STRINGS)
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('________________')

// FOR IN - RETORNA O ÍNDICE OU CHAVE (STRING, ARRAY OU OBJETOS)
for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('________________')

// FOR OF - RETORNA O VALOR EM SI (ITERÁVEIS, ARRAYS OU STRINGS)
for( let valor of nomes) {
    console.log(valor);
}

console.log('________________')

//forEach
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})