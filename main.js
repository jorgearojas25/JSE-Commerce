const Usuarios = [];
const Productos = [];
const Pedidos = [];

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

/*
Menu 
Registro de users
Lista con usuarios
Registrar Productos
ListarProductos



*/
