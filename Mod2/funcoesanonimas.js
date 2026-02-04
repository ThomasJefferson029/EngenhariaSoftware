// Declaração de uma variavel chamada resultado e atribuição de uma função anonima a ela 
let somarParametro = function(parametro1, parametro2){
    console.log("Parametro 1: " + parametro1);
    console.log("Parametro 2: " + parametro2);

    let resultado = parametro1 + parametro2;
    console.log("Resultado: "+ resultado);

    return resultado;
}

// Chamada da função anonima atraves da variavel 
let resultado = somarParametro(5 , 10);
console.log("Resultado da chamada da função somarParamentro; " + resultado);

// Definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2){
    console.log("\nExecutando a função passada como argumento: ");
    return funcao(valor1, valor2);
}

// Passando a função anonima como argumento para outra função 
let resultadoExecucao = executarFuncao( somarParametro, 7, 3);
console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

//definindo e chamando uma função anonima imediatamente 
let resultadoImediato = (function(a, b){
    console.log("\nFunção de chamada imediata: ");
    return a*b;
})(4, 6);
console.log("Resultado da função anonima chamada imediatamente: " + resultadoImediato);
