//MATCH
//buscar dados especifico sobre uma massa de dados que vc nao sabe como esta estruturado la dentro  '
const textoNaoEstruturado = "Meu Cpf é 351.233.948-42"

//expressão regular
const regex = new RegExp(`[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}`)

const cpf = textoNaoEstruturado.match(regex)

console.log(cpf);