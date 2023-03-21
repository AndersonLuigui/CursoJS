// FOR IN _______________________________FOR IN

const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Luigui',
    idade: 25
};

// FOR IN --> LÊ OS INDICES OU CHAVES DO OBJETO

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


/* EXEMPLO DE FOR 

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */