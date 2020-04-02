# GIT

**Versionamento e principais ferramentas**

Usado para versionamento de código, compartilhar come equipe .
O Git é descentralizado, assim não se perde.
Linux Torvald foi o criador.

- Github: open source - o código fica no próprio github
- Bitbucket: contrução de camadas e conecta a um gerenciador de projetos.
- Gitlab: é mais privado.


**INIT ADD COMMIT**

Intalar o Git

***comando cria a pasta .git***
```
git init
```

***comando adicionar esse arquivo***
```
git add <nome do arquivo>
```

***comando para adicionar na linha do tempo Commit***
```
git commit -m"texto que explica o que foi feito no arquivo do commit"
```

***comando para verificar o que foi alterado***
```
git log
```

***cmd mostra todas as alterações que foram feitas e nao comitadas***
```
git status
```

***LOG STATUS E SHOW***

***Branch***
```
git status
```


***BRANCH / CHECKOUT***


***MERGE E PUSH***


***CLONE E PULL***

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