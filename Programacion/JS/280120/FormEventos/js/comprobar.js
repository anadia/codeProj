const USUARIO = "oscar";
const PASS = 1235;
function comprobar(){

	let user =  document.getElementById("usuario").value;
	let pass =  document.getElementById("pass").value;
	
	if (user == USUARIO && pass == PASS){
		
			document.getElementById("res").innerHTML = "Login Correcto";
	}
	else {
		
			document.getElementById("res").innerHTML = "Datos Incorrectos" ;
	}

}	
