/** SERVER EN NODEJS Y EXPRESS */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // para conectar servers
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares (morgan: nos da info del tipo de peticiones)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


// Routes
app.use('/api/empleados', require('./routes/empleado.routes'));

// Starting server (nodemon) y express
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});