const express = require('express');

const app = express();

app.use(require('./routes'));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Servidor rodando na porta 3000');
});
