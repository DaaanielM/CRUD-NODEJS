const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs'
});

conexion.connect((err) => {
    if(err){
        console.error(`El error de conexión es: ${err}`);
        return;
    }else{
        console.log('¡Conectado a la BD MySQL!');
    }
});


module.exports = conexion;