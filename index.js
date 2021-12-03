const express = require('express')
const app = express()

const shows = require('./showdata.js')

app.set('view engine', 'pug')

app.get('/', (request, response) => {
response.render('mainpage', {shows})
})

app.get('/season/1', (request, response) => {
    response.render('seasonpage', { shows })
})

app.listen(1337, () => {
    console.log ('listening on 1337...)')
})

app.use(express.static('public'))