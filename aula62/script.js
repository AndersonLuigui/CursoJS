const nomes = ['Anderson', 'Neura', 'Ana Paula', 'Aparecido', 'Andreza', 'Rafael', 'João'];

// nomes.splice(índice, delete, elem1, eleme2, elem3)
// pop remove o último elemento do array

/* const removidos = nomes.splice(3, 2);
console.log(nomes, removidos); */


// shift
nomes.splice(nomes.length, 0, 'Jean');
console.log(nomes)