const express = require('express');
const app = express();

require('dotenv').config();

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = 8080; // default port 8080

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./database/lib/db.js');
const db = new Pool(dbParams);
db.connect();

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter(db));

app.get('/posts/submit', (req, res) => res.render('submit'));

app.get('*', (req, res) => res.render('submit'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});