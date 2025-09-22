// Alumno: Guerrero Mendoza Rodolfo Enrique
// Grupo: 1758

// Productos
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

// Carrito vacío
let carrito = [];

// Agregar productos
function agregarProducto(){

    let produ = "Productos:\n";
    productos.forEach((producto, index)=>{
        produ += `${index+1}.- ${producto.nombre}  $${producto.precio}\n`;
    });

    let opcion = prompt(produ + "Elige el número del producto a agregar:");
    let index = parseInt(opcion)-1;

    if(index >= 0 && index <= productos.length){
        carrito.push(productos[index]);
        alert(`${productos[index].nombre} se agregó al carrito.`);
    }else{
        alert("No se encontró el producto...");
    }
}

// Contenido Carrito
function mostrarCarrito(){
    if(carrito.length === 0){
        alert("El carrito está vacío.");
    }else{
        let mensaje = "Carrito: \n";
        let total = 0;

        carrito.forEach((producto, index)=>{
            mensaje += `${index+1}.- ${producto.nombre}  $${producto.precio}\n`;
            total += producto.precio;
        });

        mensaje += `Total a pagar: $${total}`;
        alert(mensaje);
    }
}

// Menú
function mostrarMenu(){
    let opcion;

    do{
        opcion = prompt(`
        Opciones Disponibles:
        1.- Agregar un nuevo producto al carrito
        2.- Mostrar carrito
        3.- Pagar y terminar
        Elige una opción:
        `);

        switch(opcion){
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                alert("Pagando...");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }

    }while(opcion !== "3");
}
mostrarMenu();