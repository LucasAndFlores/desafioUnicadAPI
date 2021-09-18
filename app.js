require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})
const express = require('express')
const app = express();
const port = process.env.PORT
const rotasEntregas = require('./routes/rotasEntregas')
const models = require('./db/models')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/v1/entregas', rotasEntregas)

// app.listen(port, () => {
//    console.log(`server running on port ${port}`) 
// })

const connect = async () => {try {
    await models.sequelize.authenticate();
    console.log('Conexão estabelecida com o sequelize');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} 
connect()

module.exports = app  