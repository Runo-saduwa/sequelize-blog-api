const express = require('express');
const connection = require('./config/sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');

const rootRouter = require('./routes')

const app = express();
const port = 8001;


app.use(cors());
app.use(bodyParser.json());
app.use(rootRouter);


const initApp = async () => {
  try {

    connection.sync({ logging: console.log, force: true, }).then(() => {
      console.log('Connection to db has been established successfully.');
    }).catch(error => {
      console.error('Unable to connect to the database:', error)
    })

    app.listen(port, () => {
      console.log('Server running in port ' + port)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initApp();