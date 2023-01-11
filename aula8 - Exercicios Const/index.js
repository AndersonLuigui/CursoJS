/* Anderson Luigui tem 25 anos, pesa 76 kg tem 1.80 de altura
e seu IMC é de xxxxxx 
Anderson Luigui nasceu em xxxx */

const nome = 'Anderson';
const sobreNome = 'Luigui';
const idade = 26;
const peso = 76;
const alturaEmM = 1.80;
let imc = peso / ( alturaEmM * alturaEmM) ;
let anoDeNascimento = 2023 - idade;

console.log(nome, sobreNome, " tem ", idade, "anos de idade e pesa", peso, "kg, tem ", alturaEmM, "de altura e seu IMC é de ", imc);
console.log(nome, sobreNome, "nasceu em ", anoDeNascimento);

// A FORMA MAIS MODERNA E MAIS FÁCIL DE PRINTAR SEM TER QUE ACRESCENTAR VÍRGULAS E ESPAÇOS É UTILIZAR O `${}` NO CODIGO


console.log(`${nome} ${sobreNome} tem ${idade} anos de idade e pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobreNome} nasceu em ${anoDeNascimento}`);