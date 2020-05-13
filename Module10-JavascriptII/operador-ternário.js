// OPERADOR TERNÀRIO

let isValid =  true;


function verify(isValid) {

    //sem operador ternário
    if(isValid) {
        return true;
    }else {
        return false;
    }

    // com operador ternário
    const result = isValid() ? true : false;
}

console.log(verify(isValid))