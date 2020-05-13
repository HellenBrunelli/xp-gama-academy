class matemática {

    soma(valorA, valorB) {
        return valorA + valorB;
    }

    subtração(valorA, valorB) {
        return valorA - valorB;
    }

}


//criando um objeto em memória
var instanciaMatematica = new matemática();

var res = instanciaMatematica.soma(2,4)

console.log(res)

