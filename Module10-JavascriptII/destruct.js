// DESTRUCT

const pessoa = {
    nome: "Hellen",
    sobrenome: "Brunelli",
    idade: "32",
    profissao: "Dev"
}

//SEM DESTRUCT

// console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let profissao = pessoa.profissao;


// COM DESTRUCT
//Pegue esses dados do meu objeto pessoa
let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao)




