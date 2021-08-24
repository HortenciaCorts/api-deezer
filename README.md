## API Deezer

🌱 Desafio utilizando a API Deezer
🚧 Projeto em andamento

### Conteúdo

<p align="center">  
	<a href="#sobre-desafio">Sobre o desafio</a> •
	<a href="#requisitos">Requisitos</a> •
	<a href="#layout">Layout</a> • 
	<a href="#executar-projeto">Como executar o projeto</a> • 
	<a href="#tecnologias">Tecnologias</a> • 
	<a href="#autora">Autora</a>  
</p>

### 💻 Sobre o desafio<a id="sobre-desafio"></a>

O Objetivo será implementar um Webapp de listagem e pré-visualização de músicas.

Para isso será utilizado a API do Deezer para requisitar os dados necessários, a documentação estará disponível no link a seguir [(https://developers.deezer.com/api/explorer?url=chart)](http://email.gupy.com.br/c/eJwVjtEKwyAMRb9GHyVqbe2DDxulvzGcjWvBrpLase7rZ-FyuBySkMnFaFup-OIUKAlWWtkZ0EZI0Zq77LvqhvbWAyjWwOvIpwjbKp7EZ9eB7X1QIRqj2mBsRD9pCKpDbQM0kSc3l5J3pm9MjTUTfjBtGWkXE-IP6bpVvc9LJX5z2giJ6fGgxPQQZk-Fk5s3KvgOi6_jte3XI6tf0rXNi6vM_n0-8HJ_YdVBfg)

### 🎨  Layout <a id="layout"></a>

![enter image description here](https://github.com/HortenciaCorts/api-deezer/blob/main/src/images/api-deezer.gif?raw=true)

### 📚  Requisitos <a id="requisitos"></a>

- [x] Bibliotecas e patterns Indispensáveis;
- [x] ReactJs ou ReactNative for web;
-   Redux;
- [x]  Axios;
-   Styled Components;

Organização do Webapp:

1º View:

- [x] Deverá apresentar a lista das principais músicas do momento listadas na Deezer;
- Também deve existir um campo de pesquisa por texto onde podemos pesquisar por álbum, artista, ou título musical;
-   Quando realizar alguma pesquisa, a listagem inicial deve ser substituída pela listagem referente a pesquisa. (Usar o mesmo componente de listagem)

Os itens da lista devem apresentar:

- [x] Os dados da música como (capa do álbum, título, cantor, duração);
- [x]  Um botão para acessar a musica completa no Deezer;
- [x] Um botão de play/pause para escutar a prévia da música;
- Um botão para adicionar a música na lista de músicas favoritas;

  

2º View:

-   Será apresentada a lista com as músicas escolhidas pelo usuário na tela principal. A listagem deve ser semelhante a da tela inicial, porém deve mostrar o botão para remover da lista de favoritos.

> Orientações:
> 
> -   Fique a vontade para escolher utilizar Hooks ou classes, mas não misture-os.
> -   Use e Abuse do Redux! Precisamos saber o seu nível de familiaridade com ele.
> -   A listagem de músicas favoritas deve estar contida em uma store do Redux, porém se quiser implementar algo para salvar no navegador a
> lista, seria bem legal, mas não é obrigatório.
> -   A listagem de músicas vindas da API devem ser feitas através de paginação, fique a vontade para fazer como achar melhor, porém, um
> infinity scroll daria aquele toque a mais, fica a dica! )

### 🚀  Como executar o projeto <a id="executar-projeto"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:  [Git](https://git-scm.com/),  [Node.js](https://nodejs.org/pt-br/)

Além disto é bom ter um editor para trabalhar com o código como  [VSCode](https://code.visualstudio.com/)

#### 🎲Rodando a Aplicação

     # Clone este repositório
	     git clone https://github.com/HortenciaCorts/api-deezer
     # Acesse a pasta do projeto no terminal
	     cd api-deezer
     # Instale a dependência do npm
	     npm install
     # Será necessário subir o servidor com as infomações (porta: 4567)
	     node src/server.js
     # Execute a aplicação em modo de desenvolvimento
	     npm start 
     # O servidor iniciará na porta: 3000
     # Acesse http://localhost:3000

### 🛠 Tecnologias <a id="tecnologias"></a>

Esse projeto foi desenvolvido com as seguintes tecnologias:
- React
- NodeJS
- CSS
- Bootstrap
- Axios

### 👧 Autora <a id="autora"></a>

Feito com 💖🥵😵 por Hortência Côrtes 👩‍💻 