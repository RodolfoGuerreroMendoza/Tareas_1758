//Alumno: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758

const express = require ('express');
const path = require('path');
const router = express.Router();

router.get('/principal',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/principal','/principal.html'));
});

router.get('/calcu',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/calcu','/calcu.html'));
});

router.get('/comp',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/comp','/comp.html'));
});

router.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/carrito','/carrito.html'));
});

module.exports=router;