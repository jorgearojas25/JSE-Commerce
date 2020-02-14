const Usuarios = [];
const Productos = [];
const Pedidos = [];

const Ejecutar = () => {
    alert('En proceso');
}

const Ejecutar = () => {
    switch (Menu()) {
      case 1:
          MenuPersona();
      case 2:
        break;
      case 3:
        break;
      case 4:
        alert("Gracias por tu visita");
        break;
      default:
        alert("Esta opcion no esta disponible");
        Ejecutar();
        break;
    }
  };
  
  const Menu = () => {
    return Number(
      prompt(
        `Bienvenido seleccion la opcion a la que deseas acceder \n 
      1. Usuarios \n 2. Productos \n 3. Pedidos \n 4. Salir`
      )
    );
  };
  
  const SeleccionMenuPersona = () => {
    return prompt(`Personas: \n a. Alta \n b. Listado`);
  };
  
  const MenuPersona = () => {
    switch (SeleccionMenuPersona()) {
      case "a":
          alert('alta')
        break;
      case "b":
          alert('lista')
        break;
      default:
        break;
    }
  };

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