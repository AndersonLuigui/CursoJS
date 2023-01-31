const numero = Number(prompt("Digite um numero número"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML + '';
texto.innerHTML =+ `<p>O seu número é ${numero}</p>`;
texto.innerHTML =+ `<p>A raiz quadrada do número ${numero} é ${Math.sqrt(numero)}</p>`;
texto.innerHTML =+ `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML =+ `<p>NaN é ${Number.isNaN(numero)}</p>`;
texto.innerHTML =+ `<p>Arredondando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML =+ `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML =+ `<p>Em duas casas decimais ${numero.toFixed(2)}</p>`;




