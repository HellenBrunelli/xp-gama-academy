# GIT
Sistema de controle de versão distribuída.

## **Versionamento e principais ferramentas**

Usado para versionamento de código, compartilhar come equipe .
O Git é descentralizado, assim não se perde.
Linux Torvald foi o criador.

- Github: open source - o código fica no próprio github
- Bitbucket: contrução de camadas e conecta a um gerenciador de projetos.
- Gitlab: é mais privado.

Primeiramente você deve instalar o [GIT](https://git-scm.com/downloads).

## **Comandos GIT**

### ***O comando abaixo cria a pasta .git***
<hr>

```
git init
```

A pasta .git fica oculta, para conseguir visualizar você pode usar o atalho:<br>
>No linux:  
> CTRL + H <br>

>No Windows: é so clicar dentro da pasta com o botão direito e exibir pasta oculta. 

<br>

### ***O comando abaixo adiciona o arquivo em staging***
<hr>

```
git add <nome do arquivo>
```
Ele faz com que o git observe as alterações daquele arquivo, ele passa a ser versionado.

<br>

### ***O comando abaixo adiciona marcações na linha do tempo***
<hr>

```
git commit -m"texto que explica o que foi modificado no seu arquivo ou pasta"
```
<br>

### ***O comando abaixo verificar o que foi alterado***
<hr>

```
git log
```

Ele nos mostra informações como: 
- indentificação,
- autor,
- data dos commits
- mensagem

<br>

### ***O comando abaixo mostra todas as alterações que foram feitas e não comitadas***
<hr>

```
git status
```

Verifica se ouve alteração de arquivo local e 
mostra a branch e o arquivo modificado.

<br>

>Se você adicionou alguma alteração em staging (com git add ), e precisa desfazer alguma coisa ou adicionar alguma coisa, pode usar o comando abaixo:

```
git reset
```
<br>

### ***Branch***
<hr>

São linhas alternativas do tempo <br>
Branch é ramificação de linha temporal.

Boas práticas de categorização de branch's:
- feature/
- feat/
- bug/
- release/
- root/

<br>

### ***O comando abaixo cria uma nova branch***
<hr>

```
git branch
```
<br>


### ***O comando abaixo junta branchs***
<hr>


Se você quiser puxar as alterações de uma branch para a sua branch master você deverá: <br>

Dentro da branch master no terminal digite o comando:
  
```
git merge <nome da branch que vc fez as alterações>
```
<br>

### ***O comando abaixo mostra as alterações que foram feitas num determinado arquivo***
<hr>

```
git show <nro do commit>
```
<u>O git show, sem o nro do commit mostra por default as alterações do ultimo commit</u>

<br>

### ***O comando abaixo lista as branch existentes***
<hr>

```
git branch
```
<br>

### ***O comando abaixo exclui uma branch***
<hr>

O comando abaixo exclui a branch
```
git branch -D <nome da branch>
```

## utilizando servidor remoto
<hr>

Subindo nossas alterações para o servidor remoto

```
git remote add origin <link_do_seu_repositório.git>
git push -u origin master
```

### ***O que é o README***

O README é um arquivo que dá instruções sobre o seu projto.
É onde você pode especificar como rodar o projeto, mostrar do que se trata e quais as tecnologias esta usando nele.

A linguagem de marcação usada para escrever o Readme é o [Markdown](https://www.markdownguide.org/basic-syntax/)

<br>

### ***GITFLOW***
<hr>

Metodologia consiste em branch principal.

Mantemos um código final para produção, em Develop para homologação teste ou controle sobre as branchs.


### **Develop:**
- quebramos em fetaures e bugs,
- deve ser um projeto completo

- Branch Hotfix: pequenas alterações a partidr da master

- Branch: Release: Juntarmos todas as branchs antes de mandar p master

- Branch de Features: onde são feitas as soluções antes de ir para master


### ***O arquivo .gitignore***
<hr>

Serve para que você consiga ignorar arquivos, por exemplo:

Eu criri um arquivo com minhas respostas da prova de git, mas como ela so deve ser vista por mim, eu adicionei ela no .gitignore para que você não consiga vê-la.

Criei um arquivo <b> .gitignore </b>
dentro dele escrevi o nome do meu arquivo:

```
provagit.md
```

[Git Instrutor: JC Bombardelli](github.com/jcbombardelli)