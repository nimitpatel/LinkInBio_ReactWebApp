const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());

// import routes
const dataRoute = require('./Routes/Data');

app.use('/data', dataRoute);


// connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('connected to db');
});

// listening to server
app.listen(3000);