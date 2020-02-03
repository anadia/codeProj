function createNewCar(){	
	let color = document.getElementById("color").value;
	let brand = document.getElementById("brand").value;
	let year = document.getElementById("year").value;
	let milleage = document.getElementById("milleage").value;
	let gas = document.getElementById("gas").value;
	let price = document.getElementById("price").value;
	
	if (brand && year && price && milleage) {
		
		price = parseFloat(price);
		milleage = parseInt(milleage);
		
		let car = new Car(parseInt(color), brand, year, milleage, parseInt(gas), Car.STATE_AVAILABLE, 
			price);
		myCarDealership.addCar(car);
		
		document.getElementById("brand").style.borderColor = "unset";
		document.getElementById("price").style.borderColor = "unset";
		document.getElementById("year").style.borderColor = "unset";
		document.getElementById("milleage").style.borderColor = "unset";
		
		document.getElementById("carForm").reset();
		
		paintCars();
	}
	else {
		if (!brand || brand == ""){
			document.getElementById("brand").style.borderColor = "red";
		}		
		
		if (!price || price == ""){
			document.getElementById("price").style.borderColor = "red";
		}	
		
		if (!year || year == ""){
			document.getElementById("year").style.borderColor = "red";
		}
		
		if (!milleage || milleage == ""){
			document.getElementById("milleage").style.borderColor = "red";
		}		
	}
}



		function verEstado(car){
			let color = "red";
			
			if (car.state == Car.STATE_AVAILABLE){
				color = "green";
			}
			else if(car.state == Car.STATE_RESERVED){
				color = "yellow";
			}
			 return color;

		}


		function buttonState(car){
			let buttonChange = "";

			if (car.state == Car.STATE_AVAILABLE || car.state == Car.STATE_RESERVED ){

				buttonChange  += "<input type='button' value='Vender' onclick='sellCar(" + car.id + ");'/>";
		}

		
		 if (car.state == Car.STATE_AVAILABLE ){
			buttonChange  += "<input type='button' value='Reservar' onclick='reserveCar(" + car.id + ");'/>";
	}


		if ( car.state == Car.STATE_RESERVED){


			buttonChange  += "<input type='button' value='Disponible' onclick='setAvailable(" + car.id + ");'/>";

		}
		return  buttonChange;
	}




function paintCars(){
	resetCarTable();	
	let cars = myCarDealership.getCars();	
	for (let car of cars){
		let datos = "<tr>" +
			"<td>"
			+ "<span style= 'background-color:"+verEstado(car)+ "'> &nbsp; &nbsp; &nbsp; &nbsp;</span>"
			+ "</td>"
			+ "<td> " + car.brand + "</td>"
			+ "<td>" + car.parseColor() + "</td>"
			+ "<td>" + car.year + "</td>"
			+ "<td>" + car.milleage + "</td>"
			+ "<td>" + car.parseGas() + "</td>"
			+ "<td>" + car.sellingPrice + "</td>"
			+ "<td>"
			+ 
			"<input type='button' value='Borrar' onclick='deleteCar(" + car.id + ");' />"+
				buttonState(car)
			+ "</td>"
			+ "</tr>";	
		
		document.getElementById("cars").innerHTML += datos;
	}	
}

function resetCarTable(){
	document.getElementById("cars").innerHTML = "";
	//un string en varias lineas (hay otra manera (secreta))
	let cabecera = "<tr> \
		<th>Estado</th> \
		<th>Marca</th> \
		<th>Color</th> \
		<th>Año</th> \
		<th>Km</th> \
		<th>Tipo</th> \
		<th>Precio</th> \
		<th>Opciones</th> \
	</tr>";	

	
	document.getElementById("cars").innerHTML = cabecera;
}

function deleteCar(id){
	myCarDealership.deleteCar(id);
	paintCars();
}



function reserveCar(id){
	myCarDealership.reserveCar(id);
	paintCars();
}

function sellCar(id){
	myCarDealership.sellCar(id);
	paintCars();
}

function setAvailable(id){
	myCarDealership.setAvailable(id);
	paintCars();
}


