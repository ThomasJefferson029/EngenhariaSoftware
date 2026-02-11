// Exemplo de uso de metedo slice()
// temos uma string com varias frutas 

let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log("Tamanho da String: " + frutas.length);

// Queremos obter uma parte da string, por exemplo, apanas "banana, laranja"
let parteFrutas = frutas.slice(6, 21);
console.log("Resultado do slice: " + parteFrutas);

// Exemplo de uso do metedo trim()
// Temos uma string com espaços em branco no inicio e no final 

let frutasComEspaco = "          abacate          ";

// Queremos remover os espaços em branco do inicio e do final da string
let frutasSemEspaco = frutasComEspaco.trim();
console.log("Resultado do trim: " + frutasSemEspaco);