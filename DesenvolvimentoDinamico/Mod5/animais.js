// Crian=ção de string com nomes de animais
let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

// Exemplo do metodo substring()
// Pega parte da string 'elefante', começando do indice 3 ate o 7
let parteAnimal1 = animal1.substring(3, 7);
console.log("Resultado da substring: " + parteAnimal1);

// Exemplo do metodo replace()
// Substitui a substring 'ra' por 're' em 'Girafa"
let substituirAnimal2 = animal2.replace("ra", "re");
console.log("Resultado de replace: " + substituirAnimal2);

// Exemplo do metodo concat()
// Concatena as strings "Elefante", "Girafa" e "Zebra" com espaços entre elas 