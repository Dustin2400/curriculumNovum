const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(routes);
app.use(require('./controller'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
});

