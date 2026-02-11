// Exemplo de comentario / anotacoes em JavaScript

// Este é um comentario de uma linha
let exemploLinha = "Comentario de uma linha"; // Pode ser colocado ao finalde uma linha tambem

/*
 Comentario de varias linhas: 
 é utilizado principalmente para documentaçãodo codigo
 Ou explicação simples que não são intuitivas
 */

/*
A função abaixo soma dois numeros.
Ela recebe dois paramentros: 
- a: o primeiro numero
- b: o segundo numero
retorna a soma de a e b.
*/
function somar(a , b){
    return a + b;
}

/**
 * subtrai o segundo numero do primeiro
 * 
 * @param {number} a - o numero do qual subtrai
 * @param {number} b - o numero a ser subtraido
 * @return {number} o resultado
 * 
 * @example
 * //exemplo de uso:
 * let resultado = subtrair(10, 4);
 * console.log(resultado): //6
 */
function subtrair (a, b){
    return a-b;
}

// Chamada de função para exemplificar

let resultadoSoma = somar(40, 2);
console.log(resultadoSoma); // Exibe 42