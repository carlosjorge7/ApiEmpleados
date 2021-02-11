const mongoose = require('mongoose');
const { Schema } = mongoose;

const empleado = new Schema({
    nombre: { type: String, required: true },
    posicion: { type: String, required: true },
    oficina: { type: String, required: true },
    salario: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado', empleado);