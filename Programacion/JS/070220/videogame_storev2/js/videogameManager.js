function getVideogameDataFromStorage(){
	videogameManager();
}

function createNewGame(){	
	let name = document.getElementById("name").value;
	let price = document.getElementById("price").value;
	let platform = document.getElementById("platform").value;
	let genre = document.getElementById("genre").value;
	
	if (name && price){
		price = parseFloat(price);
		platform = parseInt(platform);
		genre = parseInt(genre);
		
		let vg = new Videogame(null, name, price, platform, genre);
		
		videogameManager(vg);
	}
	else {
		//TODO: pintar de colores los campos
	}	
}

function videogameManager(vg){	
	if (vg) {
		addVideogameToStorage(vg);
	}

	resetVideogameTable();
	addVideogameTableHead();
	let store = StorageManager.read();
	if (store) {
		renderGamesInfo(store.getVideogames());
	}
}



function addVideogameToStorage(vg){
	StorageManager.create(vg);
}

function renderGamesInfo(vgs){	
	
	/*
		for (let vg of vgs) {
			renderVideogame(vg);
		}
	*/
	
	vgs.map(
		function (vg) {
			let datos = "<tr>" 
			+ "<td>" + renderVideogameState(vg) + "</td>"
			+ "<td>" + vg.getVGPlatform() + "</td>"
			+ "<td>" + vg.name + "</td>"
			+ "<td>" + vg.price + "</td>"
			+ "<td>" + vg.getVGGenre() + "</td>"
			+ "<td>" + renderVideogameOptions(vg) + "</td>"			
			+ "</tr>";	
			
			document.getElementById("videogames").innerHTML += datos;
		}
	);	
}


function resetVideogameTable(){
	document.getElementById("videogames").innerHTML = "";
}

function addVideogameTableHead(){	
	let cabecera = "<tr> \
		<th>Estado</th> \
		<th>Plataforma</th> \
		<th>Nombre</th> \
		<th>Precio</th> \
		<th>Género</th> \
		<th>Opciones</th> \
	</tr>";	
	
	document.getElementById("videogames").innerHTML = cabecera;
}

function renderVideogameState(vg){
	let color = "red";
	if (vg.state == Videogame.STATE_AVAILABLE){
		color = "green";
	}
	else if (vg.state == Videogame.STATE_RENTED){ 
		color = "blue";
	}

	return "<span style='background-color: " + color + "'>&nbsp;&nbsp;&nbsp;&nbsp;</span>";	
}

function renderVideogameOptions(vg){
	//BORRAR:
	let deleteButton = "<input type='button' value='Borrar' onclick='deleteVG(" 
		+ vg.id + ");' />";
	
	let otherButtons = addVGOptions(vg);
	
	return otherButtons + deleteButton;
}

function addVGOptions(vg){
	//dado el estado del vg (disponible, vendido o reservado)
	//se generarán los botones para realizar las acciones
	//que estén disponibles en cada caso
	let res = "";

	if (vg.state == Videogame.STATE_AVAILABLE){
		res += "<input type='button' value='Reservar' onclick='rentVG(" + vg.id + ");' />";
	}
	
	if (vg.state == Videogame.STATE_RENTED){
		res += "<input type='button' value='Devolucion' onclick='returnVG(" + vg.id + ");' />";
	}
	
	if (vg.state == Videogame.STATE_AVAILABLE || vg.state == Videogame.STATE_RENTED){
		res += "<input type='button' value='Vender' onclick='sellVG(" + vg.id + ");' />";
	}
	
	return res;

}


function deleteVG(id){
	StorageManager.delete(id);
	videogameManager();
}

function rentVG(id){
	let videogameStore = StorageManager.read();
	let vg = videogameStore.rentVideogame(id);
	StorageManager.update(vg);
	videogameManager();
}

function sellVG(id){
	let videogameStore = StorageManager.read();
	let vg = videogameStore.sellVideogame(id);
	StorageManager.update(vg);
	videogameManager();
}


function returnVG(id){
	let videogameStore = StorageManager.read();
	let vg = videogameStore.setAvailable(id);
	StorageManager.update(vg);
	videogameManager();
}