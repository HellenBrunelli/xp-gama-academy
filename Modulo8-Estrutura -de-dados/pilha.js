
//vetor / array
var elementos = [];
//menos -1 indica que estou fora da pilha 
var topo = -1;
const Max = 10;
//Todo elemento na pilha começa no elemento 0



function push(){
    if(topo < max){
        topo = topo + 1;
        elementos[topo] = num;
    }else {
        console.log('pilha cheia')
    }
}

function pop(){
    if(topo != -1 ){
        let num = elementos[topo]
        topo = topo -1;
        return num;
    }else {
        console.log('pilha vazia')
    }
}

push(10);

