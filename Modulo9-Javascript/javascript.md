# Javascript

Um aliado ao desenvolvedor é o console, para acessar o console é só abrir uma aba no navegador e apertar F12, ou clicar com o botão direito do mouse e clicar em Inspecionar > na aba CONSOLE.

Nós podemos salvar valores em variáveis.

prompt() função do JS usada para esperar um valor de entrada do usuário.

console.log é uma função do JS que exibe os valores na tela


## Boas Práticas Javascript

Nomes de variáveis
- Devem sempre começar com letra minúscula e a segunda palavra com a letra maiúscula (camelCase)
- Todas as variáveis devem começar com letras e não com números
- Colocar espaço entre o operador e as variáveis e depois da virgula
- Identação, usar dois espaços
- Sempre terminar instruções com ;
- Abertura de chave na mesma linha da intrução ou objeto;
- colocar o fechamento numa linha isolada
- A linha de código não deve passar de 80 caracteres.
- Utilize arquivos externos para javascript
- Os nomes de arquivos externos devem começar com letra minúscula. (questão de convenção mesmo)



#### Condicionais:

if() : significa SE
Else : significa se não 

Exemplo:
```Javascript
//Se dois for maior do que um, mostre o texto Verdadeiro
//se não mostre o texto Falso.
if(2 > 1) {
    console.log("Verdadeiro")
} else {
    console.log("falso)
}
```


#### Estrutura de repetição

Referência [Javascript - W3Scholl](https://www.w3schools.com/js/js_loop_for.asp)

Os loops podem executar um bloco de código várias vezes.

Os loops são úteis, se você deseja executar o mesmo código repetidamente, sempre com um valor diferente.

Geralmente, este é o caso ao trabalhar com matrizes:

Exemplo:

```javascript

    //Em vez de escrever:

    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
    text += cars[5] + "<br>";

    //Você pode escrever:

    var i; //variável inicial

    //variavel inicial = 0; enquanto variavel < total de itens; pegue a variavel e some a ao seu valor;
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
```

### ***Diferentes tipos de loops:***

JavaScript suporta diferentes tipos de loops:

***for*** - percorre um bloco de código várias vezes
***for/in*** - percorre as propriedades de um objeto
***for/of*** - percorre os valores de um objeto iterável
***while*** - percorre um bloco de código enquanto uma condição especificada é verdadeira
***do/while*** - também percorre um bloco de código enquanto uma condição especificada é verdadeira

### **Funções JavaScript**

Referência: 

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

Uma função JavaScript é executada quando "algo" a chama (chama).

>function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

### **Sintaxe da função JavaScript**

Uma função JavaScript é definida com a functionpalavra - chave, seguida por um nome , seguido de parênteses () .

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras que as variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
( parâmetro1, parâmetro2, ... )

O código a ser executado, pela função, é colocado entre colchetes: {}

>function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Os parâmetros da função estão listados entre parênteses () na definição da função.

Os argumentos da função são os valores recebidos pela função quando ela é chamada.

Dentro da função, os argumentos (os parâmetros) se comportam como variáveis ​​locais.

### **Invocação de Função**

O código dentro da função será executada quando "algo" invoca (chamadas) a função:

Quando um evento ocorre (quando um usuário clica em um botão)
Quando é chamado (chamado) do código JavaScript
Automaticamente (auto-invocado)
Você aprenderá muito mais sobre a chamada de funções posteriormente neste tutorial.

### **Função Return**

Quando o JavaScript chega a uma returninstrução, a função para de executar.

Se a função foi chamada a partir de uma instrução, o JavaScript "retornará" para executar o código após a instrução de chamada.

As funções geralmente calculam um valor de retorno . O valor retornado é "retornado" de volta ao "chamador":

>var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

### **Classes**

Trabalhamos com classes quando trabalhamos com orientação orientada a objetos;

Classes em Javascript provém uma maneira mais simples e claras de criar objetos e lidar com heranças.









