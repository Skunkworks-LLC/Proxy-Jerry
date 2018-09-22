const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'))
app.use('/projects/:id', express.static(__dirname + '/../public'));

app.all('/projects/:id', (req, res) => {
  const projectId = req.url.slice(9);
  console.log(projectId);
  res.redirect(307, `${projectId}`)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Attempting to listen in on assigned port: ', PORT));