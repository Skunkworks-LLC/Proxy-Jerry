const express = require('express');
const app = express();

app.use('/projects/:id', express.static(__dirname + '/../public'));

app.all('/projects/:id', (req, res) => {
  console.log(req.url);
  res.redirect(307, `${req.url}`)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Attempting to listen in on assigned port: ', PORT));