const express = require('express')
const path = require('path')
const db = require('./config/db')
const Movie = require('./Model/movieModel')
const M_router = require('./Routes/movieRoutes')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// static folder for images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/Movie', M_router)

app.listen(8000, () => {
    console.log('Server listen')
})