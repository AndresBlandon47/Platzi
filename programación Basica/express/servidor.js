var express = require('express')
var app = express()
 
app.get('/', inicio);
app.get('/cursos',cursos);

app.use(express.static("public"));
app.use('/static',express.static('public'));

function inicio (peticion, resultado){
    resultado.sendFile(__dirname +"/villa.html");

}
function cursos (peticion, resultado){
    resultado.send("Estos son los cursos geniales");

}

app.listen(8080)