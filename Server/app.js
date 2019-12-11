const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());

// import routes
const dataRoute = require('./Routes/Data');

app.use('/links', dataRoute);

// connect to db
mongoose.connect('mongodb://localhost:27017/mylinks', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db');
});

// listening to server
app.listen(3001);