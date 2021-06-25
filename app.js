const morgan = require('morgan')
const express = require('express')
const {db, Page, User} = require('./models');
const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static((__dirname + 'public')));

app.get('/', (req, res, next) => {
    res.send('Hello, world!')
});

db.authenticate()
  .then(() => {
    console.log('connected to the database!');
  })


const init = async () => {
    await db.sync({ force: true })

    app.listen(PORT, ()=>{
        console.log(`Listening at port ${PORT}! :)`)
    })
};

init();

