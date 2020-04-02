# Fundamentos Lógica de Programação


Vamos informar à maquina o que ela deve fazer.
A máquina só executa exatamente o que passamos de instrução para ela.

### ***CONCEITOS***

Lógica de programação é saber resolver problemas.
Montar o raciocínio.

Obs: Se necessário retorne a essa aula, relembre conceitos, sempre que necessário.

### 1 - ALGORITMO

1 - Algoritmo: Sequência finita de passos, com objetivo de resolver um problema

>Exemplo:
>*receita de bolo

***Tem que ser simples e intuitivo. Tem que satisfazer a pergunta: 
O usuário vai conseguir fazer este bolo?***


> **Algoritmo:**
>
> - Transforma uma informação ?
> 
> - Tem uma sequência finita de passos ?
> 
> - É ordenada ?
> 
> - Reslove um problema ?

***Simples, eficiente e intuitivo.*** <br> 
***Informar a máquina o que ela deve fazer***

*Especifique o processo ao máximo para o computador, isso é muito importante !*

>***TODO PROGRAMA É DIVIDIDO EM TRES PARTES:***
>
>* 1° -  Entrada: tudo que preciso fornecer para o programa
>
>* 2° - Processamento: passos a cumprir, pegar as informações e transformar no resultado 
>
>* 3° - Saída: Resultado final


### 2 - VARIÁVEIS E OPERAÇÕES

**Variáveis**:  reservar espaço na memória para armazenar informações relevantes.

- Toda variável tem que ter rótulo

```
  As instruções, operações que podemos fazer para as variáveis podem ser: 
  - artitmética;
  - relacionais;
  - comparação;
  - atribuição;
  - leitura de teclado ou impressão na tela
```

**Operações Aritméticas:**
```
+ (soma);
- (subtração)
* (multiplicação)
/ (divisão)
% (resto)  ]
```

**Operações relacionais:**
```
> maior
>= maior igual
< menor
<= menor igual
== iguais
!= diferente
```

**Operaçõs lógicas:**
```
&&  and
||  or
!   not
```

### Sequência de comandos

*Nunca se esqueça que o programa lê linha a linha. Ex: não tem como calcular sem antes informar o dado de entrada.*

#### PROGRAMA CALCULA MÉDIA 
```
INÍCIO:

    DECLARAR NOTA1, NOTA2, MEDIA
    LEIA(NOTA1)
    LEIA(NOTA2)

    MEDIA = (NOTA1 + NOTA2) / 2

    ESCREVA(A MÉDIA FINAL VALE)
    ESCREVA(MEDIA)

FIM:
```


#### 3 - DECISÕES

> *Primeiro faça o teste* 

```
if(se condição for verdadeira){
    execute minhas instruções 
}else{
   (se não) informe o motivo
}
```

*A resposta deste teste deve ser sim ou não , é do tipo (BOOLEAN)*

```
INÍCIO:

    DECLARAR NOTA1, NOTA2, MEDIA
    LEIA(NOTA1)
    LEIA(NOTA2)

    MEDIA = (NOTA1 + NOTA2) / 2

    ESCREVA(A MÉDIA FINAL VALE)
    ESCREVA(MEDIA)

    SE MEDIA > 6 
    ESCREVA("PARABÉNS VOCê FOI APROVADO")

    SE NÃO 
    ESCREVA("INFELIZMENTE NÃO FOI DESTA VEZ")
    FIM-SE

FIM:
```

> *Crie códigos identados e organizados. Par ter noção de que as instruções estão dentro de blocos específicos*

### Decisões multiplas

```
INÍCIO:

    DECLARAR NOTA1, NOTA2, MEDIA
    LEIA(NOTA1)
    LEIA(NOTA2)

    MEDIA = (NOTA1 + NOTA2) / 2

    ESCREVA(A MÉDIA FINAL VALE)
    ESCREVA(MEDIA)

    SE MEDIA > 9 ENTÃO
    ESCREVA("CONCEITO A")
    SENAO

        SE MEDIA > 7 ENTÃO
        ESCREVA("CONCEITO B")
        SENAO

            SE MEDIA > 5  
            ESCREVA("CONCEITO C")
            SENAO

                ESCREVA("REPROVADO")
    FIM-SE

FIM:
```

#### 4 - REPETIÇÕES

A instrução é a mesma o que muda são os valores

```
INICIO:

    DECLARE TABUADA, NUMERO, RESULTADO

    LEIA(TABUADA)
    NUMERO = 0

    ENQUANTO(NUMERO <= 10) FAÇA
    RESULTADO = NUMERO * TABUADA
    NUMERO = NUMERO + 1
    FIM-ENQUANTO

FIM:
```