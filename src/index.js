/* eslint-disable no-console */
const app = require('./app');

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
  console.log('Press CTRL-C to stop\n');
});
