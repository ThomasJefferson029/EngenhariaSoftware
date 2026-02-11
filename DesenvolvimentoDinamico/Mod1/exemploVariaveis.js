// Exemplo de var, let e const em javaScript

const externo = "Olá, eu sou uma constante global!"

// Declaração de uma variavel usando var

function exemploVar() {
    if (true) {
        var mensagem = "Olá, faculdade Descomplica! Eu sou uma var.";
    }
    console.log(mensagem);
}

// Chamando o valor exemploVar

exemploVar();

// Exemplo de erro e como resolver

var mensagem = "Olá, faculdade Descomplica! Escopo externo";
console.log(mensagem);

// Declaração de variavel usando let

function exemploLet() {
    if (true){
        let mensagem = "Olá, faculdade Descomplica! Eu sou uma let.";
        console.log(mensagem);
    }
    
}

// Chamando função exemploLet

exemploLet();

// Declaração de constante

function exemploConstante() {
    const mensagem = "Olá, eu sou uma constante";
    console.log(mensagem);
}

// Chamando a função exemploConstante

exemploConstante();

// Exemplo externo de constante

console.log(externo);