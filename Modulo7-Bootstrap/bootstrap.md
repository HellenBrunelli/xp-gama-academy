# Bootstrap

É Framework série de recursos para fazer as páginas mas tem que seguir os padrões.
Temos que seguir as recomendações para criar uma página com bootstrap

1° Toda a página em bootstrap é dividida em linhas (row).

Cada linha pode ter até 12 colunas.
Uma linha pode ser diferente da outra.


#### Introdução e Navbar

Como dar start do bootstrap na sua página.
Para incluir o bootstrap precisamos incluir as bibliotecas do bootstrap no meu código.

Para isso vc pode entrar no site oficial do boostrap [aqui](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

Você pode usar via CDN que é o que vamos fazer nesta aula, ou instalar via npm ou yarn.

- Via CDN:

Copie o css e cole no seu <head>
depois copie os scripts e cole antes do fechamento do </body> como exemplo abaixo:

Crie uma pasta e dentro dela um arquivo.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Aula Bootstrap</title>
    </head>
    <body>

        <!-- CONTEÙDO -->


        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>    
    </body>
</html>

```

Todo o nosso conteúdo é baseado em container.
Um container é dividido em linhas (row) e colunas (col-)


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Aula Bootstrap</title>
    </head>
    <body>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>Minha Lojinha na internet</h3>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3">
                Home
            </div>

            <div class="col-md-3">
                Quem Somos
            </div>

            <div class="col-md-3">
                Contato
            </div>

            <div class="col-md-3">
                Fique por dentro
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>    
    </body>
</html>

```

Na Documentação do bootstrap vc tem os <b>componentes</b>
Copiando eles e colando em seu site vc terá o componente criado na sua página bem facilmente.

Aqui você encontra os [componentes](https://getbootstrap.com/docs/4.4/components/alerts/) bootstrap.


#### CSS no Bootstrap

Se você quiser adicionar algum outro estilo que não seja do bootstrap vc pode adicionar no <head> o seu link css

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- aqui vai o link do seu CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- End -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Aula Bootstrap</title>
</head>
```

A partir dai você pode estilizar seus elementos normalmente.

Obs: Algumas coisas que acho super relevante sua atenção!
Informações abaixo retiradas da [documentação oficial](https://getbootstrap.com/docs/4.4/layout/grid/)


| GRID  | Extra pequeno <576px  | ≥576px pequeno | Médio ≥768px | Grande ≥992px | Extra grande ≥ 1200px |
|---|---|---|---|---|---|
| Largura máxima do contêiner | Nenhum (automático)	|  540px  |  720px  |  960px  |  1140px  |
| Prefixo da classe	          | .col-               | .col-sm | .col-md | .col-lg | .col-xl  |
| Nº de colunas	              |   12   |
| largura da calha	          | 30 px (15 px em cada lado de uma coluna)|

Tendo em mente como funciona o GRID do bootstrap isso vai facilitar muito sua vida.

#### Bootstrap Cards

OS [Cards do bootstrap](https://getbootstrap.com/docs/4.4/components/card/) são elementos que possuem uma imagem um texto e botão


#### Formulário e Modais


A diferença entre só input e Formulário

- Só inputs eu manipulo os valores digitados com js
- Com o form eu envio para um serviço externo para que receba os dados.


#### Layout

Ferramenta para criação de layouts: [Layoutit](https://www.layoutit.com/pt)

Esta ferramenta ajuda na criação rápida de __layout__ com bootstrap.
Ele monta através de drag in drop todo layout e da a opção de baixar o código bootstrap


## Revisão

- <b>Bootstrap</b> é uma ferramenta que nos ajuda na produtividade.

- Templates e componentes prontos

- Design responsivo

- Estrutura: <b>linhas</b> com divisões de <b>colunas</b> de até <b>12 segmentos</b>

- Nossos estilos em css podem complementar o estilo do bootstrap

- Conhecemos uma ferramenta que nos permite montar nossa estrutura arrastando componentes.



> "A prática que vai nos tornar íntimo das ferramentas"



O código deste eccommerce em bootstrap encontra-se no meu [github](https://github.com/HellenBrunelli/ecommerce-gama)








