// É UMA FUNÇÃO QUE SE CHAMA DE VOLTA
// DEVE SE PREOCUPAR É QUANDO ELA DEVE PARAR

function recursiva(max) {
    console.log(max);
    if (max >= 10000) return;
    max++;
    recursiva(max);

}

recursiva(0);