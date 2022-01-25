const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require("body-parser");
const yaml = require('js-yaml');
const fs = require('fs');
const swagger = require('swagger-ui-express');
/* Custom Modules */
const api = require("./apifuncs.js");
const model = require("./model.js");
const utils = require("./utils.js");
const swaggerJson = require('./swagger.json');

utils.initLogger("info") // read fromyaml
const logger = utils.getLogger("api")

/*
##########
# YAML parsing
##########
*/
// global variable
var cfg_info
try {
  let file_contents = fs.readFileSync('./config.yaml', 'utf8');
  cfg_info = yaml.load(file_contents);
  //logger.info({"msg":"yaml file config", "cfg":cfg_info});
} catch (err) {
  logger.fatal({"msg":"yaml file parsing error", "error":err});
}

/*
##########
# SSL certificates
##########
*/
var privateKey  = fs.readFileSync('sslcert/mitkar.io.key', 'utf8');
var certificate = fs.readFileSync('sslcert/mitkar.io.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

/*
##########
# Swagger UI
##########
*/
const swaggerCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

/*
##########
# Configure Endpoints
##########
*/
const app = express();
app.use(bodyParser.json());
app.use('/api-docs', swagger.serve, swagger.setup(swaggerJson, {swaggerCss}));
/* Operational Endpoints */
app.get('/', (req,res) => { api.defaultCcd(req, res); });
app.get('/api/list', (req, res) => { api.listCcd(req, res); });
app.post('/api/register', (req, res) => { api.regCcd(req, res); })
app.delete('/api/deregister/:id', (req, res) => { api.deregCcd(req, res); })
app.put('/api/update/:id', (req, res) => { api.updateCcd(req, res); });
/* Start App */
var method = cfg_info["method"]
var port = cfg_info["methodconf"][method]["port"]
if (method == "app") {
  app.listen(port, () => { api.initCcd(port); });
} else if (method == "http") {
  var httpServer = http.createServer(app);
  httpServer.listen(port, () => { api.initCcd(port); });
} else if (method == "https") {
  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(port, () => { api.initCcd(port); });
} else {
  logger.fatal({"msg":"Unknown method"});
}
