 function escribirPantalla(valor) 
 { 
	 document.getElementById("pantalla").value += valor;
 } 
   
 function calcular() 
 { 
	 let operacion = document.getElementById("pantalla").value;
	 let resultado = eval(operacion);
	 document.getElementById("pantalla").value = resultado;
 } 
   

 function borrar() 
 { 
	 document.getElementById("pantalla").value = "";
 } 