const ProductoController = require("../producto_controllers/producto.controller")

module.exports = (app) => {

    app.get("/api/productos/", ProductoController.ver_todos);

    app.get("/api/productos/: id", ProductoController.ver_producto);

    app.post("/api/productos/:id", ProductoController.crear_producto);

    app.put("/api/productos/:id", ProductoController.editar_producto);

    app.delete("/api/producto/id:", ProductoController.borrar_producto);

}