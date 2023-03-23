// EXERCÍCIOS FUNÇÕES
// ESCREVA UMA FUNÇÃO QUE RECEBE 2 NÚMEROS E RETORNE O MAIOR DELES


/*  function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
} 

console.log(max(1,50));  // O max(1,50) ESTÁ DIZENDO PRA ENGINER DO JS ATRIBUIR OS VALORES 1,50 NA FUNÇÃO max */


//___________________MELHORIAS___DO___CÓDIGO___ACIMA__________________________________

/* function bla (x, y) {
    if (x>y) return x;
    return y;
}

console.log(bla(12, 45)); */

//___________________MELHORIAS___DO___CÓDIGO___ACIMA__________________________________

function bla (x,y) {
    return x > y ? x : y; 
}
console.log(`O maior número entre estes dois é ${bla(25,2)}`);

//___________________MELHORIAS___DO___CÓDIGO___ACIMA__________________________________
// ARROW FUNCTION "=>"
const bla2 = (x,y) => x > y ? x : y;

console.log(`O maior número dentre os dois é ${bla2(50000, 4008)}`)

