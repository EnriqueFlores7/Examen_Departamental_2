const express = require('express');
const hbs = require('hbs');
const cors = require('cors');
const bodyParser = require('body-parser');
const puerto = process.env.PORT  || 3000;

const app = express();

//Vistas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', () => { });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Definir rutas: login, categorias, index y Not Found
//Get O Post
app.get('/productos',(req,res)=>{
    res.render('data');
});

//Definir puerto donde se escuchen las solicitudes
app.listen(puerto,()=>{
    console.log("El servidor esta corriendo en el puerto: ",puerto);
});