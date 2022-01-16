/*
npm install express
*/
const express = require('express')
const app = express()
const port = 8001

var cors = require('cors')
//app.use(cors())
app.use(
  cors({
    origin: "http://localhost:8000", // restrict calls to those this address
    methods: "GET" // only allow GET requests
  })
);

const { exec } = require("child_process");

function os_func() {
  this.execCommand = function(cmd, callback) {
      exec(cmd, (error, stdout, stderr) => {
          if (error) { // (error !== null)
              console.log(`exec error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          //console.log(`stdout: ${stdout}`);
          callback(stdout);
      });
  }
}
var os = new os_func();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.get('/getJsonLogFile', (req, res) => {
  var command = `ls | grep ".log"`;
  var cmd_output;
  os.execCommand(command, function (returnvalue) {
    cmd_output = returnvalue
    console.log(cmd_output)
    res.send(cmd_output)
  })
})

app.post('/readJsonLogFile', function(req, res){
  console.log(req.body.fname);
  var command = `cat ` + req.body.fname;
  var cmd_output;
  os.execCommand(command, function (returnvalue) {
    cmd_output = returnvalue
    console.log(cmd_output)
    res.send(cmd_output)
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
