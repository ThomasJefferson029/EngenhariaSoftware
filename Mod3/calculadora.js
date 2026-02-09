//calculadora.js

// Função que simulaa operação de uma calculadora
function calculadora(num1, num2) {
    
    // Operações arimenticas basicas 
    
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    // Incremento e decremento 
    // Vamos incrementar num1
    let incrementar = num1;
    incrementar++;

    // Vamos decrementar num2
    let decrementar = num2;
    decrementar--;

    // Exibindo os resultados resultados no console
    console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
    console.log(`subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`Modulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`Incremento (${num1}) ++ = ${incrementar}`);
    console.log(`Decremento (${num2})-- = ${decrementar}`);
}

// Executando a calculadora
//calculadora(); // Exemplo com erro
//NaN = Not a Number

calculadora(10, 5);