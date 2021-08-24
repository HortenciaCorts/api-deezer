const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/chart', async(req, res) => {
    //response é a resposta do axios, mas eu tiro o data de dentro do response
    const { data } = await axios('https://api.deezer.com/chart')
    console.log(res.json(data))
    
    return res.json(data)
})
app.get('/pesquisar', async(req, res) => {
    const { data } = await axios('https://api.deezer.com/search?q=eminem')
    return res.json(data)
})

app.listen('4567')