const morgan = require('morgan')
const express = require('express')

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send('Hello, world!')
});
