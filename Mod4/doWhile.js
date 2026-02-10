// Imagine que voce esta tenntado aprender a andar de bicicleta.
// Voce decide andar por pelo menos 1 minuto.

// Aqui, usaremos um loop do...while para esse processo:

let tempoAndando = 0;
let caiu = false;

do {
    tempoAndando++;
    console.log("Eu andei por ", tempoAndando, " minutos.");


    if (tempoAndando === 3){
        caiu= true;
    };
} while(!caiu && tempoAndando < 10); 