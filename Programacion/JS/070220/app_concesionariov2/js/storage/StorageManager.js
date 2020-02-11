function StorageManager() {}


/** 
* Se añade un coche a la tienda
*/
StorageManager.create  = function (car){	
	//puefde ser que la tienda exista (2º, 3º, 4º ... vez)
	//o que no exista y sea la 1º vez
	let jCarDealership = localStorage.getItem("carDealership");
		
	let carStore = null;
	//si existe la leo, y la convierto en un objeto de tipo carDealership
	if (jCarDealership){
		jCarDealership = JSON.parse(jCarDealership);
		carStore = new CarDealership(jCarDealership);
	}
	else { //si no existe, la creo
		carStore = new CarDealership();
	}
	
	//añado ese cochea la tienda
	carStore.addCar(car);
	
	//la tienda completa la paso a json con el coche nuevo añadido
	jCarDealership = carStore.toJSONObject();
	
	//stringifizo
	jCarDealership = JSON.stringify(jCarDealership);
	
	//y lo guardo con el coche nuevo añadido
	localStorage.setItem("carDealership", jCarDealership);
}

/** 
* Se lee la información que haya en el storage sobre la tienda
*/
StorageManager.read  = function (){	
	//puede ser que la tienda exista (2º, 3º, 4º ... vez)
	//o que no exista y sea la 1º vez
	let jCarDealership = localStorage.getItem("carDealership");
		
	let carStore = null;
	//si existe la leo, y la convierto en un objeto de tipo CarDealership
	if (jCarDealership){
		jCarDealership = JSON.parse(jCarDealership);
		carStore = new CarDealership(jCarDealership);
	}
		
	//devuelvo la tienda con o sin datos
	return carStore;
}



/** 
* Se añade un COCHE a la tienda
*/
StorageManager.update  = function (car){	
	
	let jCarDealership = localStorage.getItem("carDealership");
		
	let carStore = null;
	//si existe la leo, y la convierto en un objeto de tipo VidegameStore
	if (jCarDealership){
		jCarDealership = JSON.parse(jCarDealership);
		carStore = new CarDealership(jCarDealership);
	}
	else { //si no existe: error
		console.error("Problema con Storage update");
	}
	
	//actualizo ese coche a la tienda
	carStore.updateCar(car);
	
	//la tienda completa la paso a json con el coche actualizado
	jCarDealership = carStore.toJSONObject();
	
	//stringifizo
	jCarDealership = JSON.stringify(jCarDealership);
	
	//y lo guardo con el jugo actualizado
	localStorage.setItem("carDealership", jCarDealership);
}


/**
* Borro un coche de la tienda, sabiendo solo su ID
*/
StorageManager.delete  = function (carId){	
	//leo la tienda del storage
	let jCarDealership = localStorage.getItem("carDealership");
	
	let carStore = null;
	//si existe...
	if (jCarDealership){
		//la parseo (des-stringificar)
		jCarDealership = JSON.parse(jCarDealership);
		//creo mi tienda con la info del storage
		carStore = new CarDealership(jCarDealership);
		//y me cargo el coche del storage
		carStore.deleteCar(carId);
	}
	
	//la tienda completa la paso a json con el coche nuevo añadido
	jCarDealership = carStore.toJSONObject();
	
	//stringifizo
	jCarDealership = JSON.stringify(jCarDealership);
	
	//y lo guardo con el nuevo coche añadido
	localStorage.setItem("carDealership", jCarDealership);
		
}