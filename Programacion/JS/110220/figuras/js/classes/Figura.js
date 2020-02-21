function Figura (color){
	this.color = color;
	
	Figura.prototype.getColor = function(){
		return this.color;
	}
	
}