// SEM SPREAD OPERATOR

// inserir novos elementos onde estão faltando na lista
// let lista = [1, 2, 5];
// let listaIncluir = [3, 4]

// for (let i = 0; i < listaIncluir.length; i++) {
//     for(let j = 0; j < lista.length; j++){
//         if(lista[j] >= listaIncluir[i]){
//             lista.splice(j, 0, listaIncluir[i])
//             j++
//         }
//     }
// }

// console.log(lista)


// COM SPREAD OPERATOR

// const listResult = [1, 2, ...listaIncluir, 5];
// console.log(listResult)


const arr = ['a', 'b', 'c']

const arr2 = [...arr]; //criei uma cópia que pode ser alterado de forma independente

arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`)

