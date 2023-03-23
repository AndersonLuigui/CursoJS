//__________Break______e______Continue_______________
//FUNCIONA EM TODOS OS LAÇOS - FOR WHILE DO WHILE...
// CONTINUE - CONTINUA PARA PROXIMA INTERAÇÃO
// BREAK - QUEBRA O LAÇO




const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];


    // O CONTINUE VAI CONTINUAR O LAÇO DEPOIS DA CONDIÇÃO/BLOCO 
    if (numero === 2) {
        console.log('Encontrei o 2 - sempre coloque o contador i++ antes do continue e break se não vira um loop infinito');
        i++;
        continue;       
    }

    console.log (numero);

    // BREAK SE VC ACHAR A CONDIÇÃO SAI DO LAÇO - OU SEJA ELE PARA O LAÇO APÓS DADO A CONDIÇÃO
    if (numero === 7) {
        console.log('Encontrei o 7 sempre coloque o contador i++ antes do continue e break se não vira um loop infinito');
        i++;
        break;
    }
    
    i++;
}