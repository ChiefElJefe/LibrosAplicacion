const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

let app = express()

app.use('/publico', express.static(__dirname + '/publico'))
app.use(bodyParser.json())

app.get('/libros', (req, res) => {
    let archivo = fs.readFileSync('./libros.json')
    let libros = JSON.parse(archivo)
    res.send(libros)
})

app.post('/annadir', (req, res) => {
    try {
        let nuevo = req.body
        let archivo = fs.readFileSync('./libros.json')
        let libros = JSON.parse(archivo)
        libros.push(nuevo)
        fs.writeFileSync('./libros.json', JSON.stringify(libros))
        res.send(libros)
    } catch (err) {
        console.log(err)
    }
})

app.listen(8080)