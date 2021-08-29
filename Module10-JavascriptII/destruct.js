// DESESTRUTURAÇÃO

const pessoa = {
    nome: "Hellen",
    sobrenome: "Brunelli",
    idade: "32",
    profissao: "Dev"
}

//SEM DESESTRUTURAÇÃO

// console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let profissao = pessoa.profissao;


// COM DESESTRUTURAÇÃO
//Pegue esses dados do meu objeto pessoa
let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao)




