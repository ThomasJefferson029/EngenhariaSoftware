// Imagine que você esta fazendo exercicios fisicos para se manter saudavel.
// Você decide fazer flaxões ate ficar cansado.

// Aqui, usaremos um loop while para esse processo:

let quantidadeFlexao= 0;
let cansado= false;

while (!cansado) {
    quantidadeFlexao++;
    console.log("eu fiz ", quantidadeFlexao, " flexões!");

    if (quantidadeFlexao === 19) {
        cansado = true;
    };
};