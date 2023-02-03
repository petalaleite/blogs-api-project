const express = require('express');
const { userRoutes, loginRoutes } = require('./routes');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/users', userRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
