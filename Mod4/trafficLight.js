//  Função que pode receber a cor do semaforo e decide a ação do pedestre

function checkTrafficLight(lightColor) {

    switch (lightColor) {
        case 'verde' : 
            console.log("Pode atravessar a rua.");
            break;

        case 'amarelo' : 
            console.log("Prepare-se para atravessar a rua.");
            break;

        case 'vermelho' :
            console.log("Pare! Não pode atravessar a rua.");
            break;

        default :
            console.log("Cor invalida! Aguarde até que o semaforo mostre uma cor valida. ");
    }
    
}

// Exemplos de uso 

checkTrafficLight('verde');
checkTrafficLight('amarelo');
checkTrafficLight('vermelho');
checkTrafficLight('azul');