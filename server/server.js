const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();

const app = express()
const port = 4007

const AuthCtrl = require('./controllers/AuthCtrl')
const CartCtrl = require('./controllers/CartCtrl')

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

app.use( express.static( `${__dirname}/../build` ) )

app.get('/auth/callback', AuthCtrl.auth)

app.get('/api/currentUser', (req,res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req,res) => {
    req.session.destroy()
    res.sendStatus(200)
})

app.get('/api/products', CartCtrl.getProducts)

app.get('/api/cart', CartCtrl.getCart)
app.post('/api/cart/:productId', CartCtrl.addToCart)
app.put('/api/cart/:id', CartCtrl.updateQuantity)
app.delete('/api/cart/:id', CartCtrl.deleteFromCart)
app.post('/api/checkout', CartCtrl.checkout)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})


app.listen(port, () => {
    console.log('listening on port:', port)
})