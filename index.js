/* eslint-disable padding-line-between-statements */
const express = require('express')
const app = express()

const shows = require('./showdata.js')

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.render('mainpage', { shows })
})

app.get('/season/:num', (request, response) => {
    const {num} = request.params
    const season = shows.seasons.find ((show) => {
        return show.number === Number(num)
    })
    response.render('seasonpage', { season, title: shows.title })
})

app.all('*', (request, response) => {
    return response.status(404).send('Sorry wrong page')
})

app.listen(1337, () => {
    console.log('listening on 1337...)')
})

