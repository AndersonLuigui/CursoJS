/* 

PRIMITIVOS (IMUTÁVEIS) - STRING, NUMBER, BOOLEAN, UNDEFINED, NULL (BIGINT, SYMBOL) - VALORES COPIADOS

REFERÊNCIA (MUTÁVEL) - ARRAY, OBJECT, FUNCTION - PASSADOS POR REFERÊNCIA



let a = [1,2,3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b)

*/

const a = {
    nome: 'Anderson',
    sobrenome: 'Luigui'
};

const b = {...a};
console.log(a);
console.log(b);