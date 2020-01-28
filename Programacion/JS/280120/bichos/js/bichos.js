function getAnimalData(){
	let nombre = document.getElementById("nombre").value;
	let tipo = document.getElementById("tipo").value;
	let edad = document.getElementById("edad").value;
	
	grabar(nombre, tipo, edad);
}

function grabar(nombre, tipo, edad){
	

	var div1 = document.createElement("div");
	div1.style.width = "100px";
	div1.style.height = "100px";
	div1.style.background = "red";
	div1.style.color = "white";
	div1.innerHTML = nombre;
	document.getElementById.appendChild(contain);
	
	var div2 = document.createElement("div");
	div2.style.width = "100px";
	div2.style.height = "100px";
	div2.style.background = "blue";
	div2.style.color = "white";
	div2.innerHTML = tipo;
	document.getElementById.appendChild(contain);
	
	var div3 = document.createElement("div");
	div3.style.width = "100px";
	div3.style.height = "100px";
	div3.style.background = "green";
	div3.style.color = "white";
	div3.innerHTML = edad;
	document.getElementById.appendChild(contain);
	
	let contain = document.getElementById("contain");
	
	let contain2 = document.createElement("div");
	contain.appendChild(contain2);
/*

*/	



}