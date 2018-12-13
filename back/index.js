const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const Products = require('../react-test/db/products.json') 
const Users = require('../react-test/db/users.json')
const secret = 'demo__system';
const app = express();
app.use( cors('*') )
app.use( express.urlencoded( { extended: true}) )
app.use( express.json() )
app.use( (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    next();
})
app.get('/products', (req,res) =>{
    res.send(Products)
})
app.get('/products/:id', (req,res) => {
    const id = req.params.id
    const product = Products.find( el => el.id == id)
    res.send(product)
})
app.get('/users', (req,res) =>{
    res.send(Users)
})
app.post('/register', (req,res) =>{
    console.log(req.body)
    Users.push(req.body)
    res.send(req.body)
    console.log(Users)
})
const encrypt = data => {
    const hash = crypto.createHmac('sha256', secret)
                   .update(data)
                   .digest('hex');
    return hash;
}
const User = {
    username: 'admin',
    password: encrypt('admin123')
}
app.get('/', (req, res) => {
    res.send("Hello")
})
app.post('/login', (req, res) => {
    let {username, password} = req.body;
    password = encrypt(password);
    
    if(User.username === username && User.password === password ){
        res.json({
            username,
            password,
            auth: true
        })
    }
    else {
        res.json({
            auth: false,
            message: 'user not found'
        })
    }
   
})

app.listen( 5000, () => {
    console.log(`Port - 5000`);
})