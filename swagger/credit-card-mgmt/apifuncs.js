const model = require("./model.js");

/*
UUID = Universally Unique Identifiers
npm install uuid --save
uuidv1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a' 
uuidv4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
*/
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');

/* Add init cache func */
function initCcd() {
  console.log(`Server listening on the port : ${model.API_PORT}`);
  /* Provide some configs as well */
}

function defaultCcd(req, res) {
  console.log({"msg":"endpoint called", "method":req["method"], "endpoint":req["url"]})
  res.send(`<h1>API Running on port ${model.API_PORT}</h1>`);
  /* Provide Usages as well */
}

function listCcd(req, res) {
  console.log({"msg":"endpoint called", "method":req["method"], "endpoint":req["url"]})
  res.json(model.CCARD_DET_CACHE);
}

function regCcd(req, res) {
  console.log({"msg":"endpoint called", "method":req["method"], "endpoint":req["url"]})
  const ccd = req.body.ccd;
  model.CURRENTID = model.CURRENTID + 1
  ccd.id = model.CURRENTID
  ccd.uid = uuidv4();
  model.CCARD_DET_CACHE[model.CURRENTID] = ccd;
  res.json(model.CCARD_DET_CACHE);
}

function deregCcd(req, res) {
  console.log({"msg":"endpoint called", "method":req["method"], "endpoint":req["url"], "id":req.params.id})
  ignoreId = parseInt(req.params.id);
  delete model.CCARD_DET_CACHE[ignoreId]
  res.json(model.CCARD_DET_CACHE);
}

function updateCcd(req, res) {
  console.log({"msg":"endpoint called", "method":req["method"], "endpoint":req["url"], "id":req.params.id})
  targetId = parseInt(req.params.id);
  const ccdToUpdate = req.body.ccd;
  if (model.CCARD_DET_CACHE.hasOwnProperty(targetId) == true) {
    targetUid = model.CCARD_DET_CACHE[targetId]["uid"]
    model.CCARD_DET_CACHE[targetId] = ccdToUpdate
    model.CCARD_DET_CACHE[targetId]["id"] = targetId
    model.CCARD_DET_CACHE[targetId]["uid"] = targetUid
  } // else case
  res.json(model.CCARD_DET_CACHE);
}

module.exports ={
  initCcd,defaultCcd,listCcd,regCcd,deregCcd,updateCcd
}
