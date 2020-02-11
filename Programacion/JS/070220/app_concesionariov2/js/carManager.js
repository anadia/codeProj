function getCarDataFromStorage(){
	carManager();
}

function createNewCar(){	
	let color = document.getElementById("color").value;
	let brand = document.getElementById("brand").value;
	let year = document.getElementById("year").value;
	let milleage = document.getElementById("milleage").value;
	let gas = document.getElementById("gas").value;
	let buyingPrice = document.getElementById("buyingPrice").value;
	
	if (brand && year && buyingPrice && milleage) {
		
		buyingPrice = parseFloat(buyingPrice);
		milleage = parseInt(milleage);
		
		let car = new Car(null,parseInt(color), brand, year, milleage, parseInt(gas), buyingPrice);
		carManager(car);
		
		document.getElementById("brand").style.borderColor = "unset";
		document.getElementById("buyingPrice").style.borderColor = "unset";
		document.getElementById("year").style.borderColor = "unset";
		document.getElementById("milleage").style.borderColor = "unset";
		
	}
	else {
		if (!brand || brand == ""){
			document.getElementById("brand").style.borderColor = "red";
		}		
		
		if (!buyingPrice || buyingPrice	 == ""){
			document.getElementById("buyingPrice").style.borderColor = "red";
		}	
		
		if (!year || year == ""){
			document.getElementById("year").style.borderColor = "red";
		}
		
		if (!milleage || milleage == ""){
			document.getElementById("milleage").style.borderColor = "red";
		}		
	}
}

function carManager(car){	
	if (car) {
		addCarToStorage(car);
	}

	resetCarTable();
	addCarTableHead();
	let store = StorageManager.read();
	if (store) {
		renderCarsInfo(store.getCars());
	}
}

function addCarToStorage(car){
	StorageManager.create(car);
}

function renderCarsInfo(cars){	
	
	cars.map(
		function (car) {
			let datos = "<tr>" 
			+ "<td>" + renderCarState(car) + "</td>"
			+ "<td>" + car.getCarColor() + "</td>"
			+ "<td>" + car.brand + "</td>"
			+ "<td>" + car.year + "</td>"
			+ "<td>" + car.milleage + "</td>"
			+ "<td>" + car.getCarGas() + "</td>"
			+ "<td>" + car.buyingPrice + "</td>"
			+ "<td>" + renderCarOptions(car) + "</td>"			
			+ "</tr>";	
			
			document.getElementById("mcars").innerHTML += datos;
		}
	);	
}

function resetCarTable(){
	document.getElementById("mcars").innerHTML = "";
}

function addCarTableHead(){	
	let cabecera = "<tr> \
		<th>State</th> \
		<th>Color</th> \
		<th>Brand</th> \
		<th>Year</th> \
		<th>Milleage</th> \
		<th>Gas</th> \
		<th>Buying Price</th> \
	</tr>";	
	
	document.getElementById("mcars").innerHTML = cabecera;
}

function renderCarState(car){
	let color = "red";
	if (car.state == Car.STATE_AVAILABLE){ //verde
		color = "green";
	}
	else if (car.state == Car.STATE_RESERVED){ //amarillo
		color = "yellow";
	}

	return "<span style='background-color: " + color + "'>&nbsp;&nbsp;&nbsp;&nbsp;</span>";	
}

function renderCarOptions(car){
	//BORRAR:
	let deleteButton = "<input type='button' value='Delete' onclick='deleteCar(" 
		+ car.id + ");' />";
	
	let otherButtons = addCarOptions(car);
	
	return otherButtons + deleteButton;
}

function addCarOptions(car){
	//dado el estado del coche (disponible, vendido o reservado)
	//se generarán los botones para realizar las acciones
	//que estén disponibles en cada caso
	let res = "";

	if (car.state == Car.STATE_AVAILABLE){
		res += "<input type='button' value='Reserve' onclick='reserveCar(" + car.id + ");' />";
	}
	
	if (car.state == Car.STATE_RESERVED){
		res += "<input type='button' value='Devolution' onclick='returnCar(" + car.id + ");' />";
	}
	
	if (car.state == Car.STATE_AVAILABLE || car.state == Car.STATE_RESERVED){
		res += "<input type='button' value='Sell' onclick='sellCar(" + car.id + ");' />";
	}
	
	return res;
}

function deleteCar(id){
	StorageManager.delete(id);
	carManager();
}

function reserveCar(id){
	let carDealership = StorageManager.read();
	let car = carDealership.reserveCar(id);
	StorageManager.update(car);
	carManager();
}

function sellCar(id){
	let carDealership = StorageManager.read();
	let car = carDealership.sellCar(id);
	StorageManager.update(car);
	carManager();
}

function returnCar(id){
	let carDealership = StorageManager.read();
	let car = carDealership.setAvailable(id);
	StorageManager.update(car);
	carManager();
}


