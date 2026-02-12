// Exemplo: Manipulação de dados JSON

// Objeto JSON inicial:
let pessoa ={
    "nome": "João",
    "idade": 30,
    "endereço": {
        "rua": "rua principal",
        "numero": 123
    },
    "telefones": ["1234-5678", "4002-8922"]
};

console.log(pessoa);

// Acessar dados
console.log("\nAcessar Dados:")
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereço.rua);
console.log(pessoa["telefones"[0]]);

// Adicionar dados
console.log("\nAcessar Dados:");
pessoa.email = "joao@exemple.com";
console.log(pessoa);

// Modificar Dados
console.log("\nModificar Dados:");
pessoa.nome = 31;
pessoa.endereço.rua = "Rua secundária";
console.log(pessoa);

// Remover Dados 
console.log("\nRemover Dados:");
delete pessoa.telefones
console.log(pessoa);

// Operação com Array
console.log("\nOperação com Array:");
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

// Iterar sobre as propriedades do Objeto
console.log("\nIterar sobre as propriedades do Objeto:");

for (let chave in pessoa){
    console.log(chave + ": " + pessoa[chave]);
}

// Converter de e para JSON
console.log("\nConverter de e para JSON:");
let jsonTexto = JSON.stringify(pessoa);
console.log(jsonTexto);

console.log(" ");

let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);