// * BD

const Usuarios = [];
const Productos = [];
const Pedidos = [];

// * CLASES

class Usuario {
  constructor(nombre, apellido, telefono, idUsuario) {
    this.idUsuario = idUsuario + 1;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

class Producto {
  constructor(nombre, descripcion, idProducto) {
    this.idProducto = idProducto + 1;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

class Pedido {
  constructor(usuarioPedido, productoPedido, idPedido) {
    this.usuarioPedido = usuarioPedido;
    this.productoPedido = productoPedido;
    this.idPedido = idPedido + 1;
  }
}

// * MAIN

const Ejecutar = () => {
  switch (SeleccionMenuPrincipal()) {
    case 1:
      MenuPersona();
      break;
    case 2:
      MenuProductos();
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

// * MENUS

const MenuPersona = () => {
  switch (SeleccionMenuPersona()) {
    case "a":
      IngresarUsuario();
      MenuPersona();
      break;
    case "b":
      ConsultarListaUsuarios();
      MenuPersona();
      break;
    case "0":
      Ejecutar();
      break;
    default:
      alert("Esta opcion no esta disponible");
      MenuPersona();
      break;
  }
};

const MenuProductos = () => {
  switch (SeleccionMenuProductos()) {
    case "a":
      IngresarProductos();
      MenuProductos();
      break;
    case "b":
      ConsultarListaProductos();
      MenuProductos();
      break;
    case "0":
      Ejecutar();
      break;
    default:
      alert("Esta opcion no esta disponible");
      MenuProductos();
      break;
  }
};

// * SELECCTION MENUS

const SeleccionMenuPrincipal = () => {
  return Number(
    prompt(
      `Bienvenido seleccion la opcion a la que deseas acceder 
      \n1. Usuarios \n 2. Productos \n 3. Pedidos \n 4. Salir`
    )
  );
};

const SeleccionMenuPersona = () => {
  return prompt(
    `Personas: \n a. Alta \n b. Listado \n Oprime 0 para volver al inicio`
  );
};

const SeleccionMenuProductos = () => {
  return prompt(
    `Productos: \n a. Alta \n b. Listado \n Oprime 0 para volver al inicio`
  );
};

// * AGREGAR

const IngresarUsuario = () => {
  Usuarios.push(
    new Usuario(
      prompt("Ingrese su nombre"),
      prompt("Ingresa su apellido"),
      prompt("Ingresa su telefono"),
      Usuarios[Usuarios.length - 1] ? Usuarios[Usuarios.length - 1].idUsuario : 0
    )
  );
 
  return Usuarios.length
    ? alert("Usuario registrado correctamente")
    : alert("No se pudo registrar usuario");
};

const IngresarProductos = () => {
  Productos.push(
    new Producto(
      prompt("Ingrese nombre de producto"),
      prompt("Ingresa descripcion de producto"),
      Productos[Productos.length - 1] ? Productos[Productos.length - 1].idProducto : 0
    )
  );
  return Productos.length
    ? alert("Producto registrado correctamente")
    : alert("No se pudo registrar el producto");
};

// * OBTENER LISTAS

const ListadoUsuarios = () => {
  let listado = "";
  if (Usuarios.length) {
    for (const user of Usuarios) {
      listado += `${user.idUsuario}. ${user.nombre} ${user.apellido} \n`;
    }
  }
  return listado;
};

const ListadoProductos = () => {
  let listado = "";
  if (Productos.length) {
    for (const product of Productos) {
      listado += `${product.idProducto}. ${product.nombre} \n`;
    }
  }
  return listado;
};

// * BUSCAR UNO

const BuscarProducto = indice => {
  return Productos.filter(prod => prod.idProducto === indice)[0];
};

// * ACCIONES

const EditarEliminarProductos = producto => {
  let detalles = VerDetallesObjeto(producto);
  let seleccion = Number(
    prompt(
      `El producto elegido es: \n ${detalles} \n Para editar escriba uno (1) \nPara eliminar escriba dos (2) \n Para volver marque 0`
    )
  );
  if (seleccion === 1) {
    EditarProducto(producto);
  }
  if (seleccion === 2) {
    EliminarProducto(producto);
  }
};

// * CONSULTAR LISTA

const ConsultarListaProductos = () => {
  let indice = Number(
    prompt(
      "Si deseas ver los detalles de un producto marca su codigo \nSi no deseas hacer nada marca 0\n" +
        ListadoProductos()
    )
  );
  if (indice <= Productos.length && indice !== 0) {
    EditarEliminarProductos(BuscarProducto(indice));
  } else if (indice !== 0) {
    alert("La opcion ingresada no es valida");
  }
};

const ConsultarListaUsuarios = () => {
  let indice = Number(
    prompt(
      "Si deseas ver los detalles de un usuario marca su codigo \nSi no deseas hacer nada marca 0\n" +
        ListadoUsuarios()
    )
  );
  if (indice <= Usuarios.length && indice !== 0) {
    EditarEliminarUsuarios(BuscarUsuario(indice));
  } else if (indice !== 0) {
    alert("La opcion ingresada no es valida");
  }
};

// * ELIMINAR

const EliminarProducto = producto => {
  if (confirm(`Seguro que desea eliminar el producto: ${producto.nombre}?`)) {
    Productos.splice(Productos.indexOf(producto), 1);
    return alert(`se elimino ${producto.nombre} de la lista de productos`);
  }
};

// * EDITAR

const EditarProducto = producto => {
  if (confirm(`Seguro que desea editar el producto: ${producto.nombre}?`)) {
    producto.nombre = prompt('Ingrese el nuevo nombre', producto.nombre);
    producto.descripcion = prompt('Ingrese la nueva descripcion', producto.descripcion);
    return alert(`se edito ${producto.nombre} en la lista de productos`);
  }
}

// * TRANSVERSALES

const VerDetallesObjeto = objeto => {
  let detalle = "";
  for (const key in objeto) {
    detalle += `${key} : ${objeto[key]} \n`;
  }

  // ? Esta es otra forma de hacer lo mismo usando un foreach
  // Object.getOwnPropertyNames(producto).forEach((llave, valor) => {
  //   detalle += `${llave} : ${valor} \n`
  // });
  return detalle;
};
