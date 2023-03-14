
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO POR ARRAYS
//...rest, ...spread || O REST PEGA O RESTO E O SPREAD DISTRIBUI
//               0  1  2  3  4  5  6  7  8

/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um, , tres, , cinco, , sete, ...resto] = numeros; // ELEMENTOS VAZIOS PULA VALORES DA ARRAY
console.log(um, tres, cinco);
console.log(resto); */



//                    1          2          3
//                 0  1  2    0  1  2    0  1  2  
/* const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]); */

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros;
console.log(seis);