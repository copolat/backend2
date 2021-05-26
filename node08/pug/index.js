// Created by node-express snippet
const express = require('express')
const app = express()
const port = 3000
// jade = pug
app.set('view engine', 'pug')

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index.pug', {name:'Demetrius', phone:'(803) 206-1988 x873'}))

app.listen(port, () => console.log(`Example app listening on port port!`))