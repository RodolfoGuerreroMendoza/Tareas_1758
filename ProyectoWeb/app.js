//Alumno: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db/db');
const app = express();

// Configuración
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'clave_unica',
    resave: false,
    saveUninitialized: false
}));

// Redirige al inicio si no se hace login
const requireLogin = (req, res, next) => {
    if (req.session.loggedin) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Login
app.get('/login', (req, res) => {
    if (req.session.loggedin) res.redirect('/');
    else res.render('login');
});

// Registro
app.get('/register', (req, res) => {
    if (req.session.loggedin) res.redirect('/');
    else res.render('registro');
});

// Registro
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Consulta
    const checkQuery = 'SELECT * FROM Administradores WHERE name = ? OR email = ?';
    db.query(checkQuery, [name, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.send('Error en el servidor');
        }
        if (result.length > 0) {
            // Ya existe
            res.send(`
                <script>
                    alert('Error: El nombre del administrador o el correo ya están registrados. Intenta de nuevo.');
                    window.history.back();
                </script>
            `);
        } else {
            // Inserta
            const insertQuery = 'INSERT INTO Administradores (name, email, password) VALUES (?, ?, ?)';
            db.query(insertQuery, [name, email, password], (err, result) => {
                if (err) {
                    res.send('Error al registrar Administrador');
                } else {
                    res.redirect('/login');
                }
            });
        }
    });
});

// Login
app.post('/auth', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM Administradores WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // Accede
            req.session.loggedin = true;
            res.redirect('/');
        } else {
            res.send(`
                <script>
                    alert("Datos Inválidos");
                    window.location.href = "/login";
                </script>`
            );
        }
    });
});

// Cerrar Sesión
app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
});

// Principal
app.get('/', requireLogin, (req, res) => {
    // Muestra Usuarios
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.send('Error obteniendo datos');
        } else {
            res.render('index', { 
                users: results, 
                userName: req.session.name 
            });
        }
    });
});

//Formulario agregar Usuario
app.get('/add',requireLogin,(req,res)=>{
    res.render('agregar');
});

// Agregar (post)
app.post('/add', requireLogin, (req, res) => {
    const { name, email, password } = req.body; 
    // Consulta
    const checkQuery = 'SELECT * FROM users WHERE name = ? OR email = ?';
    db.query(checkQuery, [name, email], (err, result) => {
        if (result.length > 0) {
            res.send(`
                <script>
                    alert('No se pudo crear: El nombre o el correo ya existe.');
                    window.history.back();
                </script>
            `);
        } else {
            // Insertar
            const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            db.query(insertQuery, [name, email, password], (err, result) => {
                if (err) console.log(err);
                res.redirect('/');
            });
        }
    });
});

// Editar
app.get('/edit/:id', requireLogin, (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        res.render('editUsua', { user: result[0] });
    });
});

// Editar
app.post('/update/:id', requireLogin, (req, res) => {
    const id = req.params.id;
    const {name, email} = req.body;
    // Consulta
    const checkQuery = 'SELECT * FROM users WHERE (name = ? OR email = ?) AND id != ?';
    db.query(checkQuery, [name, email, id], (err, result) => {
        if (result.length > 0) {
            // Si existe error
            res.send(`
                <script>
                    alert('Error: No puedes usar ese nombre o correo porque ya pertenecen a otro usuario.');
                    window.history.back();
                </script>
            `);
        } else {
            // Actualiza
            const updateQuery = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
            db.query(updateQuery, [name, email, id], (err, result) => {
                if(err) console.log(err);
                res.redirect('/');
            });
        }
    });
});

// Eliminar
app.get('/delete/:id', requireLogin, (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        res.redirect('/');
    });
});

// Tabla Admins
app.get('/admins', requireLogin, (req, res) => {
    db.query('SELECT name, email FROM Administradores', (err, results) => {
        if(err) res.send('Error');
        else {
            res.render('verAdmins', { admins: results });
        }
    });
});

const port = 3009;
app.listen(port, () => console.log(`Server en http://127.0.0.1:${port}`));