const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/projects', (req, res) => {
  console.log('received get request for proxy server');
  res.status(200).send();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Attempting to listen in on assigned port: ', PORT));