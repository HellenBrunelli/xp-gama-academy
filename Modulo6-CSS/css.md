# CSS - Cascading Style Sheets

### ***Folhas de estilo em cascada.***

É uma linguagem de criação de estilos, que quando combinados determinam qual será a aparência de uma página web. Enquanto o HTML cuida da estrutura contida em uma página.

O css pode ser:

### <ins>Inline:</ins>

Você adiciona o estilo dentro da tag usando
<b>style="propriedade: valor;"</b> exemplo:<br>
```
<div style="color:red;">Texto que será exibido</div>
```

### <ins>Interno:</ins>
Determinamos o ```<style>``` dentro da tag ```<head>```, e dentro dela declaramos o seletor de classes ou elementos. No exemplo abaixo, nosso seletor é o ```<body>```:<br>
```
<html>
    <head>
        <style>
            //selecionando o elemento no DOM (HTML) e aplicando a cor vermelha
            .body {
                background: red;
            }
        </style>
    </head>
</html>
```
### <ins>Externo:</ins>
Você cria um novo arquivo com a etensão __.css__

Exemplo: <br>
```__nome_do_arquivo.css__```

E no seu html vc devera importar esse arquivo, conforme exemplo abaixo:

```
<html>
    <head>
        //importando o arquivo de estilo
        <link rel="stylesheet" href="nome_do_arquivo.css">
    </head>
</html>
```

>__*Vale ressaltar que dentro do ```href``` vai o caminho que seu arquivo ```.html``` vai percorrer para encontrar o arquivo ```.css``` <br>
Desta fora esse caminho não é algo fixo, mas vai ser diferente conforme a estrutura do projeto.*__

<br>

__**O CSS tem uma infinidade de propriedades e valores.<br>
Você pode consultar e saber mais sobre eles na documentação no [W3 Schools](https://www.w3schools.com/css/).**__