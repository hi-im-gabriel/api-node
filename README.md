 <h1 align="center">CRUD API com Node, TS e Typeorm</h1>
   <p align="center">
    	<img src="https://i.imgur.com/FqzjhL1.png" alt="Logo" height="300">
  </p>
  


## 1 - Instalar as dependências

`npm i express sqlite3 typeorm uuid reflect-metada`

## 2 - Migrar o banco de dados

`npm run typeorm migration:run`

## 3 - Inicializar a aplicação

`npm run dev`


<br><br>

> REQUISIÇÕES

| METODO | URL | BODY |
| :-: | :-: | :-: |
| GET | /usuarios/ |  |
| POST | /usuarios/ | {"nome":"Teste",<br>"email":"teste@gmail"} |
| PATCH | /usuario/ | {"nome":"Novonome",<br>"email":"novo@email",<br>"id":"ID"} |
| DELETE | /usuario/:id |  |
