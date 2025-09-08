// Alumno: Guerrero Mendoza Rodolfo Enrique
// Grupo: 1758

//número de intentos
var intentos = 3;
    
//genera el número que hay que adivinar entre el 1-10
let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// <- quita el comentario para hacer trampa -> // console.log("número secreto: " + num);

//Continua el juego hasta que sea menor que 1
while(intentos >= 1){

    //obtención de número del usuario
    let x = parseInt(prompt("Adivina el número, ingresa un número entre el 1 y el 10: "));
    console.log("número dado: " + x);

    //anuncio de win o intenta de nuevo
    if(num == x){
        console.log("LE ATINAAAASSTEEEEEEE");
        alert("LE ATINAAAASSTEEEEEEE");
        break;
    }else{
        console.log("intenta de nuevo");
        alert("intenta de nuevo");
    }
    
    //Resta de intentos e imprime los intentos restantes
    intentos --;
    console.log("número de intentos restantes: " + intentos);
}

//Anuncia cuando pierde el usuario
if(intentos == 0){
    console.log("Perdiste...")
    alert("Perdiste, intenta en una nueva pestaña. El número secreto era: " + num + ".");
}