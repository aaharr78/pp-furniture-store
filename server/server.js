const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express()
const port = 4007

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('db is connected!')
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json())


app.listen(port, () => {
    console.log('listening on port:', port)
})