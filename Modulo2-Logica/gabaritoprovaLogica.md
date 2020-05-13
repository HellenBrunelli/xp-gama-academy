    1. Questões - Lógica de Programação

    3. Considere as afirmações abaixo. Assinale a alternativa correta:
        1. Um Algoritmo é um conjunto finito de instruções
        2. Um Algoritmo é apenas uma forma de representar um computador
        3. Um Algoritmo é um conjunto finito de instruções organizadas de forma lógica para resolver um problema
        4. Um Algoritmo só é válido se executar corretamente para um único conjunto de dados
        5. Um Algoritmo é um conjunto de tarefas aleatórias para resolver qualquer problema

    4. Levando em conta a sequência das instruções, é válido afirmar que:
        1. Instruções sempre são executadas uma após a outra, porém podemos organizá-las de forma não sequencial
        2. As instruções são sequenciais, porém podem sofrer desvios de execução (tais como as condicionais) ou mesmo serem executadas repetidas vezes
        3. As instruções não dependem da ordem que são executadas, pois, é a propriedade da computação quântica que define isso
        4. As instruções são descritas de modo a deixar a cargo do computador decidir o que executar
        5. Nenhuma das anteriores

    5. O que significa essa sequência? E-> P -> S
        1. Entrada - Processamento - Saída, ou seja, os dados que o programa já tem armazenados, seu procedimento de coleta e o formato que serão exibidos
        2. Entrada - Processamento - Saída, ou seja, os dados que são gerados para testes de forma aleatória, o Processamento destes dados e como a máquina armazena isso no HD
        3. Entrega - Produção - Síntese, ou seja, o que o usuário espera, como os dados são produzidos e a forma como eles são agrupados
        4. Entrada - Processamento - Saída, ou seja, os dados que o usuário informa, o procedimento de resolução e o resultado esperado
        5. Entrave - Produto - Solução, ou seja, o problema que o usuário tem, o programa produzido e a solução para o cliente.

    6. Sobre variáveis, considere as seguintes afirmações
I - São espaços de memória
II -  Seus valores são imutáveis
III -  Armazena um único valor que pode se modificar ao longo da execução
IV - Pode ter um tipo definido a fim de qualificar a informação armazenada
        1. Somente a I é verdadeira
        2. I, II e III são verdadeiras
        3. I, III e IV são verdadeiras
        4. Todas são verdadeiras
        5. Todas são falsas  

    7. Considere o seguinte algoritmo
INICIO
declare a, b, c;
a = 3;
b = 5;
c = a * b + 5;
a = a + 8 / 2;
b = 5 * b * 5;
escreva (a);
escreva (b);
escreva (c);
FIM
Ao final da execução, o resultado da exibição das variáveis a, b e c serão, respectivamente:
    1. 7, 125, 20
    2. 20, 7, 125
    3. 5, 25, 115
    4. 115, 7, 20
    5. 5, 7, 125

    8. Considere o seguinte Algoritmo
INICIO
declare salario, imp;
leia(salario)
se (salario < 1000) entao
  imp = 0;
      senao 
         imp = (salario - 150) * 15/100; 
fim-se
escreva(imp);
FIM
Ao se considerarmos uma entrada de dados no valor de 1150, qual será o resultado final?
        1. 200
        2. 500
        3. 1000
        4. 0
        5. 150

    9. Considere o algoritmo abaixo
INICIO
pergunte ao usuário o valor de X
se X for maior que 10 então
calcule Y =  X * X
exiba(Y)
senão
mostre ao usuário a mensagem "impossível calcular"
fim-se
FIM

O que acontece se o usuário executar o programa duas vezes com os seguintes valores: 10, 20
    1. Exibe 100 e 400
    2. Exibe 100 e "impossível calcular"
    3. Exibe "impossível calcular" e 400
    4. Exibe "impossível calcular" e "impossível calcular"
    5. Nada se pode afirmar a respeito dessa execução

    10. Considere o algoritmo abaixo e execute-o passo a passo
INICIO
declare A, B, C
escreva("informe um valor positivo para A")
leia(A)
B = 0
C = 1
enquanto (A != 0) faça
B = B + 1
C = C * 2
A = A - 1
fim-enquanto
FIM
Ao final desta execução, para uma entrada de valor 5, os valores de A, B e C, respectivamente serão:
    1. 1, 0, 10
    2. 0, 5, 32
    3. 0, 5, 10
    4. 0, 1, 10
    5. 5, 5, 32









    11. Considere o algoritmo abaixo (observação: o operador % indica o resto da divisão. Ex: 5 % 2 = 1, pois o resto da divisão de 5 por 2 é 1).

INICIO
declare NUM, P, I
leia (NUM)
   P = 0
I = 0
enquanto (NUM > 0) faça
se (NUM % 2 == 0) entao
P = P + 1
senao
I = I + 1
fim-se
NUM = NUM - 1
     fim-enquanto
escreva(P)
escreva(I)
FIM
Ao final da execução do algoritmo, para um valor de entrada 9, os valores de P e I serão, respectivamente
    1. 4, 4
    2. 5, 5
    3. 5, 4
    4. 9, 0
    5. 4, 5

    12. Considere o algoritmo abaixo
INICIO
A = 2;
   enquanto (A < 1000) faca
  A = A * 2
fim-enquanto
escreva (A)
FIM

O que faz este algoritmo?
    1. Obtém e mostra a primeira potência de 2 que seja maior que 1000
    2. Obtém o primeiro número par após 1000
    3. Obtém o último número par menor que 1000
    4. Mostra na tela uma sequência de potências de 2 até chegar em 1000
    5. Mostra os valores pares de 2 até 1000.
        2. 