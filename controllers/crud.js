const conexion = require('../database/db');

const controller = {}; // Este objeto es el vamos a ir cambiando.

// Listar users
controller.list = async(req,res) => {
    await conexion.query('SELECT * FROM users', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('index', {results: results});
        }
    });
};



// Capturar users

controller.save = async(req,res) => {
    const{user, name, rol} = req.body;
    const saveUser = {
        user,
        name,
        rol
    }
    await conexion.query('INSERT INTO users SET ?', [saveUser], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
}

// Editar users
controller.edit = async(req,res) => {
    const {id} = req.params;
    await conexion.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('edit', {results:results[0]});
        }
    });
}

controller.update = async(req,res) => {
    const {id} = req.params;
    const {user, name, rol} = req.body;
    const newUser = {
        user,
        name,
        rol
    }
    await conexion.query('UPDATE users set ? WHERE id = ?', [newUser, id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
};

// Eliminar users

controller.delete = async(req,res) => {
    const {id} = req.params;
    await conexion.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
};



module.exports = controller;