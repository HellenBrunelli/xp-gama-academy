# GIT
Sistema de controle de versão distribuída.

**Versionamento e principais ferramentas**

Usado para versionamento de código, compartilhar come equipe .
O Git é descentralizado, assim não se perde.
Linux Torvald foi o criador.

- Github: open source - o código fica no próprio github
- Bitbucket: contrução de camadas e conecta a um gerenciador de projetos.
- Gitlab: é mais privado.


1º Instalar o GIT

**Comandos GIT**

***comando cria a pasta .git***
A pasta .git fica oculta, para conseguir visualizar você pode apertar:
No linux: ctrl + H
No Windows é so clicar dentro da pasta com o botão direito e exibir pasta oculta. 
```
git init
```

***comando adicionar esse arquivo***
Ele faz com que o git observe as alterações daquele arquivo, ele passa a ser versionado.
```
git add <nome do arquivo>
```

***comando para adicionar na linha do tempo Commit***
gera ponto na linha do tempo
```
git commit -m"texto que explica o que foi feito no arquivo do commit"
```

***comando para verificar o que foi alterado***
indentificação, autor, data dos commits e mensagem
```
git log
```

***cmd mostra todas as alterações que foram feitas e nao comitadas***
verificar se houve alteração de arquivo local
mostra a branch e o arquivo modificado
```
git status
```

***LOG STATUS E SHOW***

***Branch***
Linhas alternativas do tempo
Branch é ramificação de linha temporal.

Boas práticas - categorizando branch's:
feature/
feat/
bug/
release/
root/

```
git branch
```
stagin é qd vc da um add no arquivo, quando o git passa a observar seu arquivo

```
git reset
```
o comando acima remove da area de staging as alterações, assim vc consegue editar e subir novamente para o git.

Na branch master eu vou buscar as alterações que estão em <nome da branch>. 
```
git merge <nome da branch>
```

Para visualizar as alterações que foram feitas num determinado arquivo use o comando:
```
git show <nro do commit>
```
Só o git show, mostra somente o ultimo commit 

O comando abaixo lista as branch existentes
```
git branch
```

O comando abaixo exclui a branch
```
git branch -D <nome da branch>
```

## utilizando servidor remoto

Subindo nossas alterações para o servidor remoto

```
git remote add origin <link do repositório.git>
git push -u origin master
```

O README é o local de falar sobre os eu projeto e dar orientações para que outras pessoas.

***GITFLOW***
Metodologia consiste em branch principal

Mantemos um código final em produção e Develop para homologação teste ou controle sobre as branchs.


Develop:
- quebramos em fetaures e bugs,
- deve ser um projeto completo

- Branch Hotfix: pequenas alterações a partidr da master

- Branch: Release: Juntarmos todas as branchs antes de mandar p master

- Branch de Features: onde são feitas as soluções antes de ir para master


***IGNORE***

***.gitignore***
```
node_modules = pasta
.Ds Store = arquivo
```


github.com/jcbombardelli



Instrutor: JC Bombardelli