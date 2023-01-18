const fetch = require('node-fetch')
const recurso = 'http://127.0.0.1:8080'

let cat = ''

let nuevo = 
    {
        "title": "15345435",
        "author": "LALA",
        "img": "9.jpg"
    }


let consthtml = document.getElementById('wrapper')

let inicio = libros => {
    for (let i = 0; i < libros.length; i++) {
        cat += '<div><img src="' + recurso + '/publico/' + libros[i].img + '" height="170" width="100">'+
        '<br>'+
        '<label><strong>'+libros[i].title+'</strong></label>'+
        '<br>'+
        '<label>'+libros[i].author+'</label> </div>'
    }
    consthtml.innerHTML = cat
}

fetch(recurso+'/libros')
.then(res => res.json())
.then(json => inicio(json))

document.getElementById('boton1').addEventListener('click',()=>{
    cat = ''
    fetch(recurso+'/annadir', {
        method:'post',
        body: JSON.stringify(nuevo),
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(json => inicio(json))
})
