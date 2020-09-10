# Wakanda

Este projeto foi criado com objetivo exemplificar a utilização de algumas ferramentas e servir como base para os primeiros passos com desenvolvimento baseado em [NodeJS](https://nodejs.org/)


### Dependências:
[Knex.js](http://knexjs.org/) - query builder
[Express.js](https://expressjs.com/) - web framework
[Hapi/Boom](https://github.com/hapijs/boom) - tratamento de erro
[Bookshelf](https://bookshelfjs.org/) - ORM
[Joi](https://joi.dev/) - validação
[MySQL](https://www.mysql.com/) - banco de dados
[winston](https://github.com/winstonjs/winston) - ferramenta de log
[Jest](https://jestjs.io/) - ferramenta de teste
[Docker](https://www.docker.com/) - ferramenta de virtualização baseada em container


### Primeiros passos:

Requisitos: é necessário estar com o [NodeJS](https://nodejs.org/),  [Git](https://git-scm.com/) e [Docker](https://www.docker.com/) instalado.

1. Baixe o codigo
2. Instale as dependências utilizando `npm i` ou `npm install`
3. Com o docker rodando, execute o comando `docker-compose -f "docker-compose.yml" up -d --build` para levantar o [MySQL](https://www.mysql.com/)
4. Execute o comando `npx knex migrate:latest` para criar as tabelas no banco de dados (veja mais em [Migrations-CLI](http://knexjs.org/#Migrations-CLI))
5. Execute o comando `npx knex seed:run` para popular o banco de dados com os dados de exemplo (veja mais em [Seeds-CLI](http://knexjs.org/#Seeds-CLI))
6. Execute o comando `npm run test` para rodar os testes
7. Execute o comando `npm start` para levantar a aplicação 
