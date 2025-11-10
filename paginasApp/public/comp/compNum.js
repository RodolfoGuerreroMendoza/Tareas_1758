//Alumno: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758

document.getElementById('comparador-form').addEventListener('submit',
    function(event){
        event.preventDefault();

        let numero1 = parseInt(document.getElementById('num1').value);
        let numero2 = parseInt(document.getElementById('num2').value);
        let resultado;

        // verifica que sean enteros y no esté vacío
        if (isNaN(numero1) || isNaN(numero2) 
            || !Number.isInteger(Number(document.getElementById('num1').value)) 
            || !Number.isInteger(Number(document.getElementById('num2').value))){

            resultado = "Por favor ingresa solo números enteros.";
            document.getElementById('result').innerHTML = resultado;
            return;
        }

        // compara
        if (numero1 > numero2){
            resultado = `El número ${numero1} es mayor que ${numero2}.`;
        }else if (numero1 < numero2){
            resultado = `El número ${numero1} es menor que ${numero2}.`;
        }else{
            resultado = `Los dos números son iguales (${numero1}).`;
        }
        document.getElementById('result').innerHTML = resultado;
    }
);
