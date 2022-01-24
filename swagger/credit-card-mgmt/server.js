const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const api = require("./apifuncs.js");
const model = require("./model.js");

/* Swagger UI based imports */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

const app = express();
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.get('/api/list', (req, res) => { api.listCcd(req, res); });
app.get('/', (req,res) => { api.defaultCcd(req, res); });
app.post('/api/register', (req, res) => { api.regCcd(req, res); })
app.delete('/api/deregister/:id', (req, res) => { api.deregCcd(req, res); })
app.put('/api/update/:id', (req, res) => { api.updateCcd(req, res); });

app.listen(model.API_PORT, () => { api.initCcd(); });
