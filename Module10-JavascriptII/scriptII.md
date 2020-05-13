Javascrit II

Atalhos e dicas que vão evoluir a performance.

hosting: para estudar


```javascript

// TEMPLATE STRING


let menuNome = "Hellen";
let meuSObrenome = "Brunelli"; 
let minhaProfissão = "Desenvolvedora";

// usando variáveis com template string

console.log(`Ola eu sou ${meuNome} ${meSobrenome} e minha profissão é ${minhaProfissão}`)

//interpolaçãom, o código meio que para e busca o valor
Console.log(`O resultado da soma de 1 + 1 é igual a ${1 + 1}`)

//criando objeto em template string
console.log(`O objeto JSON é ${{ object: 'value'}}`);

```


Você pode substituir condiçaõ if else por operador ternário.




#### Single Page Application - SPA

Frameworks: React / Angular (percursor dos frameworks) / vue.js se baseia no conceito de single components


#### Progressive Web App

<b>Progressivo:</b> funcionando para quelquer usuário em qualquel navegador escolhido

<b>Responsivo:</b> adequando-se a qualquer formato, seja ele Desktop, celular, tablet, etc

<b>Independente de conectividade:</b> aprimorando através de Service Workers para trabalhar offline ou com conexão limitada

<b>Semelhante ao aplicativo:</b> deve ter interface similar de um app para usuários, oferecendo os mesmos recursos independente do dispositivo

<b>Sincronizando:</b> mantendo-se atualizado constantemente pelo service Worker.

<b>Seguro:</b> sempre com conexão [quando disponível] via https.

<b>Envolvendo</b> e gerar engajamento através de notificações push

<b>Instalavel:</b> possibilidade de "guardar o app sem necessariamente instalar.

<b>Linkável:</b> Facilmente compartilável com um link, reduzindo o atrito das lojas de app.

### **Web Components**

<b>Html Template:</b> possibilita a criação de fragmentos HTML que podem ser invocados sempre que necessário.

<b>Custom Elements:</b> Capacidade de criar components customizados

<b>Shadow DOM:</b> estilo e diretivas globais ficam encapsulados, ou seja, cada componente não é capaz de interferir nos demais

<b>ES Modules:</b> possibilidde de carregar módulos nativamente.

### Components Compilers:

[CapivaraJs](https://capivarajs.github.io/#/)

