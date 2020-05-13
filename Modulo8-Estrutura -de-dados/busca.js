
var valores = [5,8,10,22,38,45,60, 90, 120];

// function busca(num) {
//     for (let i = 0; i < 6; i++) {
//         if(num == valores[i]) {
//             return i;
//         }
//     }
//     return -1;
// }

//neste caso quando o valor buscado não esta na lista retornamos -1, se existe ele retona o indice deste elemento
// console.log(busca(50))



function binaria(num){
    let inicio; 
    let fim;
    let meio;

    inicio = 0;
    fim = 9;
    while(inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);

        if(num == valores[meio]){
            return meio
        }else {
            if(num > valores[meio]){
                inicio = meio + 1;
            }else {
                fim = meio - 1;
            }
        }
    }

    return -1;


}


console.log(binaria(60))



