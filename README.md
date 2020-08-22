<h1 align="center">CatDown</h1>

![Preview-Screens](https://i.imgur.com/Wm53yXe.png)

<p align="center">
  	<img alt="Repository size" src="https://img.shields.io/github/repo-size/david123ramos/CatDown">
  	<a href="https://github.com/david123ramos/CatDown/commits/master">
    	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/david123ramos/CatDown">
  	</a>
  	<a href="https://github.com/acidiney/buscador-ao/issues">
    	<img alt="Repository issues" src="https://img.shields.io/github/issues/david123ramos/CatDown">
  	</a>
  	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

*Baixa videos do YouTube de maneira rápida e direta.*

## Requisitos

- Ter o [Node](https://nodejs.org/en/) instalado na máquina.

## 💻 Com GUI Web

1. Clone ou faça download do repositório;
```
git clone https://github.com/david123ramos/CatDown.git CatDown && cd CatDown/
```

2. Entre na pasta *"backend"* e faça a instalação dos módulos;
```
cd backend/ && npm install
```

3. Abra o arquivo index.html na pasta *"frontend/"* em seu navegador de preferência;

4. Insira o link do vídeo do **Youtube** e seja feliz ;) 😊

## 💻 Modo CLI

1. Clone ou faça download do repositório;
```
git clone https://github.com/david123ramos/CatDown.git CatDown && cd CatDown/
```

2. Entre na pasta *"cli"* e faça a instalação dos módulos;
```
cd cli/ && npm install
```

### Exemplos
 - Ajuda: ``node index.js --help``
 - Salvando em arquivo **.mp4**:  ``node index.js --url "https://www.youtube.com/watch?v=qrMwxe2ya5E" -o video.mp4``
 - Salvando com **stdout**: ``node index.js --url "https://www.youtube.com/watch?v=qrMwxe2ya5E" > video.mp4``
 
### License
----

**MIT**
