class Clientes  {
    constructor(id ,nombre, dni, localidad ){
        this.id = id;
        this.nombre = nombre;
        this.dni = dni;
        this.localidad = localidad;
    }
}
    
let id = prompt("ingresar id del cliente");
let nombre = prompt("ingresar nombre del cliente"); 
let dni = prompt("ingresar dni del cliente"); 
let localidad = prompt("ingresar localidad del cliente"); 


const nuevosClientes = [];

nuevosClientes.push(new Clientes(id, nombre, dni, localidad));

console.log(nuevosClientes);



const Productos = [
    {
      id: "1", nombre: "Cat Chow Adultos", descripción: "Alimento balanceado para perros adultos x20kg", precio: 2500
    },
    {
        id: "2", nombre: "Purina Pro Plan", descripción: "Alimento balanceado para perros adultos x22kg", precio: 3300
      },
      {
        id: "3", nombre: "Performance", descripción: "Alimento balanceado para gatitos x12kg", precio: 4100
      },
      {
        id: "4", nombre: "Cat Chow Gatitos", descripción: "Alimento balanceado para gatitos x12kg", precio: 3500
      },
      {
        id: "5", nombre: "Wiskas", descripción: "Alimento balanceado para gatitos x9kg", precio: 3300
      }
     ]

     
     const productoNuevo = {
        id: "6", nombre: "Dogui", descripción: "Alimento balanceado para Cachorros x22kg", precio: 2999
     }

     Productos.push(productoNuevo);
     console.log(Productos);

Productos.sort