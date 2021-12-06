/* eslint-disable padding-line-between-statements */
const { request, response } = require('express')
const express = require('express')
const app = express()

const shows = require('./showdata.js')

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.render('mainpage', { shows })
})

app.get('/season/1', (request, response) => {
    const season = shows.seasons[0]
    response.render('seasonpage', { season })
})

app.get('/season/2', (request, response) => {
    const season = shows.seasons[1]
    response.render('seasonpage', { season })
})

app.get('/season/3', (request, response) => {
    const season = shows.seasons[2]
    response.render('seasonpage', { season })
})

app.get('/season/4', (request, response) => {
    const season = shows.seasons[3]
    response.render('seasonpage', { season })
})

app.all('*', (request, response) => {
    return response.status(404).send('Sorry wrong page')
})

app.listen(1337, () => {
    console.log('listening on 1337...)')
})

