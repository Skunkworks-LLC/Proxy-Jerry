const express = require('express');
const app = express();

// app.use((req, res, next) => {
//    res.header(“Access-Control-Allow-Origin”, “*”);
//    res.header(“Access-Control-Allow-Headers”, “Origin, X-Requested-With, Content-Type, Accept”);
//    next();
// });

app.get('', (req, res) => {
  console.log('received get request for proxy server');
  res.status(200).send();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Attempting to listen in on assigned port: ', PORT));