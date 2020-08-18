# CatDown
Baixa videos do YouTube de maneira rápida e direta.

#Requisitos
-Ter o [Node](https://nodejs.org/en/) instalado na máquina.

#Modo de uso

## Com GUI Web
1 - baixar as dependências do projeto (dentro da pasta do backend) com
```
npm install
```

2- dentro da pasta backend iniciar com 
```
node index.js
```
3 - Abrir o index.html da pasta frontend em seu navegador de preferência

4- Inserir o link do YouTube e ser feliz 😊

## Modo CLI
1- Baixar as dependências do projeto (dentro do diretório ``cli`)
``$ npm install``

2- Iniciar a aplicação

**Exemplos:**

Ajuda: ``node index.js --help``

Salvando em arquivos: ``node index.js --url "https://www.youtube.com/watch?v=qrMwxe2ya5E" -o video.mp4``

Salvando com stdout: ``node index.js --url "https://www.youtube.com/watch?v=qrMwxe2ya5E" > video.mp4``

4- Ser feliz 😊
