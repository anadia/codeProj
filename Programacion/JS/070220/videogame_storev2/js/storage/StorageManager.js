function StorageManager() {}


/** 
* Se añade un viejuego a la tienda
*/
StorageManager.create  = function (vg){	
	//puefde ser que la tienda exista (2º, 3º, 4º ... vez)
	//o que no exista y sea la 1º vez
	let jVideogameStore = localStorage.getItem("videogameStore");
		
	let vgStore = null;
	//si existe la leo, y la convierto en un objeto de tipo VidegameStore
	if (jVideogameStore){
		jVideogameStore = JSON.parse(jVideogameStore);
		vgStore = new VideogameStore(jVideogameStore);
	}
	else { //si no existe, la creo
		vgStore = new VideogameStore();
	}
	
	//añado ese videojuego a la tienda
	vgStore.addVideogame(vg);
	
	//la tienda completa la paso a json con el jugo nuevo añadido
	jVideogameStore = vgStore.toJSONObject();
	
	//stringifizo
	jVideogameStore = JSON.stringify(jVideogameStore);
	
	//y lo guardo con el juego nuevo añadido
	localStorage.setItem("videogameStore", jVideogameStore);
}

/** 
* Se lee la información que haya en el storage sobre la tienda
*/
StorageManager.read  = function (){	
	//puefde ser que la tienda exista (2º, 3º, 4º ... vez)
	//o que no exista y sea la 1º vez
	let jVideogameStore = localStorage.getItem("videogameStore");
		
	let vgStore = null;
	//si existe la leo, y la convierto en un objeto de tipo VidegameStore
	if (jVideogameStore){
		jVideogameStore = JSON.parse(jVideogameStore);
		vgStore = new VideogameStore(jVideogameStore);
	}
		
	//devuelvo la tienda con o sin datos
	return vgStore;
}



/** 
* Se añade un viejuego a la tienda
*/
StorageManager.update  = function (vg){	
	
	let jVideogameStore = localStorage.getItem("videogameStore");
		
	let vgStore = null;
	//si existe la leo, y la convierto en un objeto de tipo VidegameStore
	if (jVideogameStore){
		jVideogameStore = JSON.parse(jVideogameStore);
		vgStore = new VideogameStore(jVideogameStore);
	}
	else { //si no existe: error
		console.error("Problema con Storage update");
	}
	
	//actualizo ese videojuego a la tienda
	vgStore.updateVideogame(vg);
	
	//la tienda completa la paso a json con el jugo actualizado
	jVideogameStore = vgStore.toJSONObject();
	
	//stringifizo
	jVideogameStore = JSON.stringify(jVideogameStore);
	
	//y lo guardo con el jugo actualizado
	localStorage.setItem("videogameStore", jVideogameStore);
}


/**
* Me cargo un juego de la tienda, sabiendo solo su ID
*/
StorageManager.delete  = function (vgId){	
	//leo la tienda del storage
	let jVideogameStore = localStorage.getItem("videogameStore");
	
	let vgStore = null;
	//si existe...
	if (jVideogameStore){
		//la parseo (des-stringificar)
		jVideogameStore = JSON.parse(jVideogameStore);
		//creo mi tienda con la info del storage
		vgStore = new VideogameStore(jVideogameStore);
		//y me cargo el juego del storate
		vgStore.deleteVideogame(vgId);
	}
	
	//la tienda completa la paso a json con el jugo nuevo añadido
	jVideogameStore = vgStore.toJSONObject();
	
	//stringifizo
	jVideogameStore = JSON.stringify(jVideogameStore);
	
	//y lo guardo con el juego nuevo añadido
	localStorage.setItem("videogameStore", jVideogameStore);
		
}