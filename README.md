 <h1 align="center">CRUD Api com Node, TS e Typeorm</h1>
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
| POST | /usuarios/ | <div class="tooltip">BODY<span class="tooltiptext">{"nome":"Teste",<br>"email":"teste@gmail"}</span></div> |
| PATCH | /usuario/ | <div class="tooltip">BODY<span class="tooltiptext">{"nome":"Novonome",<br>"email":"novo@email",<br>"id":"ID"}</span></div> |
| DELETE | /usuario/:id |  |

<br><br>
<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>