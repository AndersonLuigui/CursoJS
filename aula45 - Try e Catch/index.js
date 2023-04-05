/* try {
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
    // É EXECUTA QUANDO NÃO HÁ ERRO


    try {
        console.log(b);

    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou Finally');
    }


} catch (e) {
    console.log('O arquivo deu error ?')
    // É EXECUTADO QUANDO HÁ UM ERRO
} finally {
    console.log('Eu sempre sou executado');
    // É EXECUTADO SEMPRE - MAS VC PODE OMITIR ELE - GERALMENTE USAMOS SÓ TRY E CATCH
}
 */

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    //TRATAR O ERRO
} finally {
    console.log('Tenha um bom dia.');
}


