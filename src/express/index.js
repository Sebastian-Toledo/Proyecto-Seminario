const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 3000;
const usuarios = require(__dirname+'/usuarios.json')
const url = require('url');
const p2 = require('../public/js/ordoquiJuanIgnacio-practica2');
const personas = require('./people.json')

function personasRefactorAge(personas) {
    personas.forEach(persona => {
        persona.dob = new Date(persona.dob)
    })
}
personasRefactorAge(personas);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(bodyparser.urlencoded({extended:false}));

app.get('/loggedIn', (req,res)=> {
    res.sendFile(__dirname+'/public/loggedIn.html');
})

app.get('/names',(req,res)=>{
    const url = req.query.username;
})

app.post('/',(req,res)=>{
    const usuario = req.body.username;
    const contraseña = req.body.password;
    var exist = false;
    console.log(usuario, contraseña);
    for(let i=0;i<usuarios.length;i++ ){
        if (usuario == usuarios[i].username  && contraseña == usuarios[i].password) {
            res.redirect('/loggedIn');
            exist=true;
            break;
        }
    }
    if (!exist) {
        res.redirect('/');
    }    
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.get('/overweight_people',(req,res)=>{
    res.send(p2.imcMayores(personas));
})

app.get('/people_by_age',(req,res)=>{
    res.json(p2.age(personas));
})

app.get('/imc_over_40',(req,res)=>{
    res.json(p2.imcMayoresDe(40,personas));
})

app.get('/average_imc',(req,res)=>{
    res.json({'avg':p2.imcPromedio(personas)});
})

app.get('/youngest',(req,res)=>{
    res.json(p2.min(personas));
})

app.get('/people_by_height',(req,res)=>{
    res.json(p2.menorAMayor(personas));
})