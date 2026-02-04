// Arrow Function

// Exemplo basico de função Arrow que soma dois numeros
let somar = (a, b) => {
    return a+b;
};

// Chamada da função e exibindo o resultado no console
console.log(somar(5, 3));

// Exemplo de arrow function com um unico paramentro (não precisa de parenteses)
let dobrar = n => n*2; 

// Chamada da função e exibindo o resultado no console
console.log(dobrar(5));

// Exemplo de arrow function usada como callback
let numeros= [1, 2, 3, 4, 5]; 

// Usando arrow funcition como metodo map para dobrar os valores do array
let numerosDobrados = numeros.map(dobrar);

//Exibindo o array resultante no console
console.log(numerosDobrados);

// Arrow function com corpo de função mais complexo
let saudacao = (nome, idade) => {
    let mensagem = (`\nOlá, meu nome é ${nome} e tenho ${idade} anos.`);
    return mensagem;
};

//Chamada da função e exibindo o resultado no console
console.log(saudacao("Thomas", 25));