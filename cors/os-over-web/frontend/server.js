const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(cors())
const port = process.env.PORT || 8000;

var corsOptions = {
  origin: 'http://localhost:8001',
  // some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,
}

// sendFile will go here
app.get('/', cors(corsOptions), function(req, res) {
  res.sendFile(path.join(__dirname, '/logFileMod.html'));
});

app.listen(port);
console.log(`Server started at http://localhost:${port}`);
