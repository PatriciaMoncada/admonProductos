const mongoose = require("mongoose");

const EsquemaProducto = mongoose.Schema ({
    nombre: String,
    precio: Number,
    descripcion: String
}, {timestamps: true, versionKey: false});
//timestamps: crea campos de createdAt y updatedAt
//versionKey: elimina atributo __v

const Producto = mongoose.model("producto", EsquemaProducto);
module.exports = Producto;