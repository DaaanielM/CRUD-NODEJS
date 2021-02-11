const express = require('express');
const router = express.Router();

const conexion = require('../database/db');
const controller = require('../controllers/crud');

// Ruta para LISTAR
router.get('/', controller.list);

// Ruta para CREAR registros
router.get('/create', (req,res) => {
    res.render('create');
});

router.post('/create', controller.save);


// Ruta para editar
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', controller.update);


// Ruta para eliminar el registro
router.get('/delete/:id', controller.delete);






// Ruta iniciar sesión

router.get('/inicio', (req,res) => {
    res.render('login');
});








module.exports = router;