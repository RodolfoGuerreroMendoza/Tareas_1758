document.getElementById('calculadora-form').addEventListener('submit',

function(event){
    event.preventDefault();

    let num1= parseFloat(document.getElementById('num1').value);
    let num2= parseFloat(document.getElementById('num2').value);
    let resultado;

    console.log(num1);
    let operador= document.getElementById('operador').value;
    
    switch(operador){
        case 'suma':
            resultado= num1+num2;
            break;
        case 'resta':
            resultado= num1-num2;
            break;
        case 'multiplica':
            resultado=num1*num2;
            break;
        case 'divide':
            if( num2!== 0 ){

                resultado=num1/num2;
            }else{
                resultado="Error! no podemos hacer una divicion entre 0";
            }
            break;
        default:
            resultado="Operador invalido";
            break;
    }
    document.getElementById('result').innerHTML=`El resultado es ${resultado}`;
}

);