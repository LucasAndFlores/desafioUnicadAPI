# Unicad API

Hi, this is the backend project for Unicad challenge. 

if you want to run this project in your environment, you should: 
- download the project with git clone 
- switch to the branch dev_env 
- run the command npm install

notice: you need to edit the files .env and .env.test with your config about your database (such as username and password, if you have one).

## Tests
If you want to run the tests with jest you need to run the following commands in your terminal:
- npm run dbtest
- npm run dbmigratetest
- yarn test 

To delete the database of tests, you need to run npm run postest

## Dev environment 

If you want to test the API with postman, you can run the following commands in your terminal: 
- yarn sequelize db:create
- yarn sequelize db:migrate
- npm run dev 

That being done, you can start your requests in postman 

### Reqs in postman

To test the main routes, the URL is: http://localhost:8000/v1/entregas 

Entry points: 
- GET - /
- POST - /
- PUT - /:id 
- DELETE - /:id

Body of requisitions needs to be in this structure: 

{
    "nome_cliente": "lucio",
    "data_de_entrega": "2021-12-25",
    "ponto_de_partida": "rua almirante noronha",
    "num_ponto_de_partida": 123,
    "ponto_de_destino": "rua do tatuape",
    "num_ponto_de_destino": 452
}

If you try the requisition without any field of this, it will be rejected. 

If you want see the API running in production environment, you can click <a href="https://desafiounicadlucas.herokuapp.com/v1/entregas/"> here </a>


### Stacks, frameworks and libs
- Main framework: Node JS
- ORM: Sequelize 
- Database: MySQL
