const express = require('express');

//INITIALIZE APP WITH EXPRESS
const app = express();
app.use(express.json());

//Set proper Headers on Backend
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//ROUTES
app.use('/dev', require('./routes/dev.routes.js'));
app.use('/users', require('./routes/users.routes.js')); //users crud

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
