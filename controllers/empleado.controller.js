const Empleado = require('../models/empleados');
const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
}

empleadoCtrl.createEmpleado = async (req, res) => {
    const empleado = new Empleado({
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        oficina: req.body.salario,
        salario: req.body.salario
    });
    await empleado.save(); // guardamos empleado
    res.json({
        status: 'Empleado guardado'
    });
}

empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
}

empleadoCtrl.editEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleado = {
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        oficina: req.body.oficina,
        salario: req.body.salario
    };
    await Empleado.findByIdAndUpdate(id, {$set: empleado});
    res.json({
        status: 'Empleado actualizado'
    });
}

empleadoCtrl.deleteEmpleado = async (req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({
        status: "Empleado eliminado"
    });
}

module.exports = empleadoCtrl;