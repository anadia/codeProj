function GameShop(){
    this.shop = [];

    GameShop.prototype.addVideoGame = function(videogame){
		this.shop.push(videogame);
	
    }
    
    GameShop.prototype.getVideoGame = function(){
		return this.shop;
	
    }
    
    GameShop.prototype.deleteVideoGame = function(id){
		let position = -1;
		for (let i = 0; i < this.shop.length && position == -1; i++){
			if (this.shop[i].getId() == id){
				position = i;
			}
		}
		
		if (position != -1){
			this.shop.splice(position, 1);
		}
    }   
    
    GameShop.prototype.rentVideoGame = function(name){	
		let found = false;
		for (let i = 0; i < this.shop.length && !found; i++){
			if (this.shop[i].getId() == id){
				if (this.shop[i].isAvailable()) {
					this.shop[i].rent();
				}
			}
		}		
    }
    
    GameShop.prototype.sellVideoGame = function(id){	
		let found = false;
		for (let i = 0; i < this.shop.length && !found; i++){
			if (this.shop[i].getId() == id){
				if (this.shop[i].isRented() || this.shop[i].isAvailable()) {
					this.shop[i].sell();
				}
			}
		}		
    } 
    
    GameShop.prototype.setAvailable = function(id){	
		let found = false;
		for (let i = 0; i < this.shop.length && !found; i++){
			if (this.shop[i].getId() == id){
				if (this.shop[i].isRented()) {
					this.shop[i].available();
				}
			}
		}		
	}


}