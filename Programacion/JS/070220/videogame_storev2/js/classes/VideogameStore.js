function VideogameStore (jVgStore){
	this.vgs = [];
	
	if (jVgStore){
		let jVgs = jVgStore.videogames;
		
		for (let jVg of jVgs){
			let vg = new Videogame(jVg);
			this.vgs.push(vg);
		}
	}
	
	
	VideogameStore.prototype.addVideogame = function(vg){
		this.vgs.push(vg);
	}
	
	VideogameStore.prototype.getVideogames = function(){
		return this.vgs;
	}
	
	VideogameStore.prototype.deleteVideogame = function(id){
		let position = -1;
		for (let i = 0; i < this.vgs.length && position == -1; i++){
			if (this.vgs[i].id == id){
				position = i;
			}
		}
		
		if (position != -1){
			this.vgs.splice(position, 1);
		}
	}
	
	VideogameStore.prototype.rentVideogame = function(id){	
		let found = false;
		let vg = null;
		for (let i = 0; i < this.vgs.length && !found; i++){
			if (this.vgs[i].id == id){
				if (this.vgs[i].isAvailable()) {
					this.vgs[i].rentVG();
					vg = this.vgs[i];
				}
			}			
		}		
		return vg;
	}
	
	VideogameStore.prototype.sellVideogame = function(id){	
		let found = false;
		let vg = null;
		for (let i = 0; i < this.vgs.length && !found; i++){
			if (this.vgs[i].id == id){
				if (this.vgs[i].isAvailable() || this.vgs[i].isRented()) {
					this.vgs[i].sellVG();
					vg = this.vgs[i];
				}
			}
		}		
		
		return vg;
	}
	
	VideogameStore.prototype.updateVideogame = function(vg){	
		let found = false;
		for (let i = 0; i < this.vgs.length && !found; i++){
			if (this.vgs[i].id 
				== 
				vg.id){
				this.vgs[i] = vg;
			}
		}				
		
	}
	
	VideogameStore.prototype.setAvailable = function(id){	
		let found = false;
		let vg = null;
		for (let i = 0; i < this.vgs.length && !found; i++){
			if (this.vgs[i].id == id){
				if (this.vgs[i].isRented()) {
					this.vgs[i].makeVGAvailable();
					vg = this.vgs[i];
				}
			}
		}		
		return vg;
	}
	
	
	
	VideogameStore.prototype.orderByName = function(id){	
		this.vgs.sort
	}

	VideogameStore.prototype.orderByName = function(){
		this.vgs.sort(
			function (a, b){
				if (a.name > b.name) {
					return 1;
				}
				else if (a.name < b.name) {
					return -1;
				}
				else {
					return 0;
				}
			}
		);
	}
	
	VideogameStore.prototype.oderByPrice = function(){
		this.vgs.sort(
			function (a, b){
				return b.price - a.price;
			}
		);
	}
	
	VideogameStore.prototype.oderByStatus = function(){
		this.vgs.sort(
			function (a, b){
				return a.state - b.state;
			}
		);
	}
	
	
	VideogameStore.prototype.toJSONObject = function(){
		let jVgStore = {};
		
		let jVgs = [];
		for (let vg of this.vgs){
			let jVg = vg.toJSONObject();
			jVgs.push(jVg);
		}
		jVgStore.videogames = jVgs;
		
		return jVgStore;
	}
}
