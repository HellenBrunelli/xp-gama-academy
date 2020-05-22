# React

Instrutor: [Guilherme Ramos](https://ramosht.com)

Preparar o ambiente para React:

- Você precisa ter o [node](https://nodejs.org/en/) instalado.
  O node vem com o gerenciador de pacote npm. O yarn é mais rápido e mais completo que o npm.
  Para instalar o yarn você pode vir [aqui](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- Você precisa de um editor de código, o que vamos usar é o [VSCODE](https://code.visualstudio.com/download)
- Uma dica de terminal para usar é o hyper, gitbash, powershell.


Para iniciar um projeto vamos usar o pacote create react app que ja cria um app e suas configurações básicas para que funcione.

```
npx create-rect-app nomeApp
```

o npx faz referência externa ao create react app, desta forma vc pode usá-lo sem precisar te-lo na máquina

# Fundamentos do React

No react vc cria um componente e ele é renderizado pelo Javascript no HTML

no reactDom.render() a função render recebe dois parâmetros, o primeiro é o elemento que vai ser renderizado, o segundo é onde vai ser renderizado.

JSX = Html dentro do Javascript

No react as tags devem ter autofechamento.
EX:
```html
 <input />
```

No React quando vamos atribuir uma classe devemos atribuir o className.
Todo componente tem seu:
- Estado
- Propriedades: atributos do HTML

# Estado do componente

Como definir estado?

Vamos usar os hooks: = é uma API para facilitar algumas coisas no React.
Através dos Hooks podemos setar e modificar estados.

Quando usamos o useState, podemos desestruturar;

```javascript
const [ usuario, setUsuario ] = useState('valor inicial')
```

O estado tem que ser a unica fonte de verdade

# Controled components

Cada elemento tem seu estado que é a unica fonte de verdade.

handle = mudar alguma coisa

Quando você importa um pacote usa a sintaxe 
```javascript
import Pacote from 'pacote'
```

quando vai importar um arquivo usa esta sintaxe:

```javascript
import arquivo from './local'
```


# Vamos usar o AXIOS 'fazer requisições http
Para saber mais sobre o axios consulte  a Doc [aqui](https://github.com/axios/axios)

<br>

# React Router DOM

VAmos traçar as rotas, mudança de páginas

O plugin usado sera o [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)


Ao traçar as rotas para que o react entenda a rota raiz devemos declarar como exact

```javascript
  <BrowserRouter>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/repositories' component={Repositories} />
      </Switch>
  </BrowserRouter>
```

# Organização do projeto

Separamos por pastas:

Pages: Home e Respositories
components: 

<br>

# Estilizando componentes com [Style components](https://styled-components.com/)

<br>


# Programação Imperativa VS Declarativa

A Imperativa você diz tudo que o computador tem que fazer.

Declarativa: Falar o que espero daquele estado.

<br>

# Conditional rendering

Renderização condicional de elementos



# Para continuar estudando

- [React Context API](https://pt-br.reactjs.org/docs/context.html): Permite criar contextos onde os dados serão utilizados, asssim você pode acessar os dados, só usar o hook e useContent (use para lidar com dados porém não tao complexa)
- [Redux](https://redux.js.org/): Pacote que cria contextos globais para a apicação, que pode ser acessado por todas as páginas do app, ele não se limita a estados mas também sa para usar o sideEffects. (Use para aplicações complexas)
- [Next.js](https://nextjs.org/): Renderiza um site estático, corrige o SEO.
- [Gatsby.js](https://www.gatsbyjs.org/): Framework de react, gerador de página estática.