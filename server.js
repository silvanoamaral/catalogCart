const express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');     // Setamos que nossa engine será o ejs
app.use(expressLayouts);           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded());  // Com essa configuração, vamos conseguir parsear o corpo das requisições

//app.locals.points = "1.2.3";
//app.locals.listaProduct = require('./products.json');

let listaProduct = require('./products.json');

//Router 
app.get('/', (req, res) => {
    res.render('pages/home',{
        title: 'Home Page',
        name: 'Home Page',
        listaProduct: listaProduct
    });
});

app.use(express.static(__dirname + '/public'));
//server
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`);
    console.log('Para derrubar o servidor: ctrl + c');
});