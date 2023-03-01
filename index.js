const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
  if (err) {
    response.status(500).send('sorry, something is not working.');
  }

  response.send(await readFile('./home.html', 'utf-8'));
});

app.listen(process.env.PORT || 3030, () => console.log(`Running at localhost:3030`));