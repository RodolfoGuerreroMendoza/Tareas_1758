const { cache } = require("react");

function agregarPantalla(value){
    document.getElementById('pantalla').value+=value;
}
function limpiarPantalla(){
    document.getElementById('pantalla').value="";
}

function calcular(){
    try{
        var result = eval(document.getElementById("pantalla").value);
        document.getElementById('pantalla').value=result;
    }catch{
        document.getElementById("pantalla").value="Error";
    }
}