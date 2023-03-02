const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const port = 3000;

const Router = require('./router');

// app.use(express.static(path.join(__dirname, './views')));

app.set('view engine', 'ejs');

app.use('/', Router);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:8000`)
})

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://hayitboyevkhojanazar:23092005x@cluster0.0qrv22c.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(8000, () => {
            console.log('Succed DB connected');
            console.log('Server started on port http://localhost:8000');
        });
    })
    .catch((err) => {
        console.log(err);
    })