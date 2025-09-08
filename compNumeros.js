// Alumno: Guerrero Mendoza Rodolfo Enrique
// Grupo: 1758

//Obtención de números
var numero1 = parseInt(prompt("ingresa un número cualquiera (1):"));
var numero2 = parseInt(prompt("ingresa un número cualquiera (2):"));
var numero3 = parseInt(prompt("ingresa un número cualquiera (3):"));

console.log("los números dados son: " + numero1 + ", " + numero2 + ", " + numero3 + ".")

//Verifica si son iguales todos los números
if(numero1 == numero2 == numero3){
    console.log("son iguales todos los números");
}else{
    if(numero1 != numero2 || numero2 != numero3 || numero3 != numero1 ){
        
        //Encuentra los números que son iguales
        if(numero1 == numero2){
            console.log("El primer y el segundo número son iguales");
        }else{
            if(numero2 == numero3){
                console.log("El segundo y el tercer número son iguales");
            }else{
                if(numero1 == numero3){
                    console.log("El primer y el tercer número son iguales");
                }else{
                    console.log("ningún número es igual");
                }
            }
        }

        //Encuentra el número mayor
        if(numero1 >= numero2 && numero1 >= numero3){
            console.log("el número " + numero1 + " es el mayor");
        }else{
            if(numero2 >= numero1 && numero2 >= numero3){
                console.log("el número " + numero2 + " es el mayor");
            }else{
                console.log("el número " + numero3 + " es el mayor");
            }
        }

        //Encuentra el número menor
        if(numero1 <= numero2 && numero1 <= numero3){
            console.log("el número " + numero1 + " es el menor");
        }else{
            if(numero2 <= numero1 && numero2 <= numero3){
                console.log("el número " + numero2 + " es el menor");
            }else{
                console.log("el número " + numero3 + " es el menor");
            }
        }
    }   
}