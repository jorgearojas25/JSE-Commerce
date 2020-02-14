const Usuarios = [];
const Productos = [];
const Pedidos = [];

const Ejecutar = () => {
    alert('En proceso');
}

///Clases

class Usuario {
    
    constructor(nombre, apellido, correo, direccionPostal, idUsuario) {
        this.idUsuario = idUsuario > 1? idUsuario: 1;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccionPostal = direccionPostal;
    }
}

class Producto {
    constructor(nombreProducto, descripcionProducto, idProducto) {
        this.idProducto = idProducto > 1? idProducto: 1; 
        this.nombreProducto = nombreProducto;
        this.descripcionProducto = descripcionProducto;
    }
}

class Pedido {
    constructor( usuarioPedido, productoPedido, idPedido){
        this.usuarioPedido = usuarioPedido;
        this.productoPedido = productoPedido;
        this.idPedido = idPedido > 1? idPedido : 1;
    }
}

/*
Menu 
Registro de users
Lista con usuarios
Registrar Productos
ListarProductos



*/