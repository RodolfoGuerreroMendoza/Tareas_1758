//Alumno: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758

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

function buscar(){
    let nombre = prompt("Introduce el nombre a buscar");
    let encontrado = false;

    for(let i = 0; i < carrito.lenght; i++){
        if(producto.nombre.toLowerCase() === nombre.toLowerCase()){
            alert(
                `Producto encontrado: \n`+
                `Nombre: ${producto.nombre}\n`+
                `Precio: ${producto.precio}`
            );
            encontrado = true;
            break;
        }
    }
    if(!encontrado){
        alert("No se encontró");
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
        3.- Buscar producto
        4.- Pagar y terminar
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
                buscar();
                break;
            case "4":
                alert("Pagando...");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }

    }while(opcion !== "4");
}
mostrarMenu();