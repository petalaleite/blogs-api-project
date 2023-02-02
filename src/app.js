const express = require('express');
const { userRoutes, login } = require('./routes');

// ...

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/login', login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
