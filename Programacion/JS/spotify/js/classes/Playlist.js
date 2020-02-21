function Playlist (jPlaylist, name){ //entre paréntesis van los parámetros
	this.songs = []; //new Array();
	this.currentSong = 0;
	
	if (jPlaylist) {
		let jSongs = jPlaylist.songs;
		
		for (let jSong of jSongs){
			let song = new Song(jSong);
			this.songs.push(song);
		}
		
		this.name = jPlaylist.name;
	}
	else {	
		//atributos o propiedades (this.algo)
		this.name = "New Playlist";
		if (name) {
			this.name = name;
		}
	}
	
	
	
	
	//métodos (funcionalidades)
	Playlist.prototype.getName = function(){
		return this.name;
	}
	
	//TODO: comprobar repetidos
	Playlist.prototype.addSong = function(song){		
		this.songs.push(song);
	}
	
	Playlist.prototype.removeSong = function(song){
		let position = -1;
		
		for (let i = 0; i < this.songs.length && position == -1; i++){
			if (this.songs[i].getId() == song.getId()){
				position = i;
			}
		}
		
		if (position != -1){
			this.songs.splice(position, 1);
		}		
	}
	
	Playlist.prototype.getDuration = function(){
		let duration = 0;
		
		/*
			for (let i = 0; i < this.songs.length; i++) {
				duration += this.songs[i].getDuration();
			}
		*/

		for (let song of this.songs) {
			duration += song.getDuration();
		}
		//TODO: pasar a h/m/s
		
		return duration;
	}
		
	Playlist.prototype.shuffle = function(){		
		let aux = [];		
		let size = this.songs.length;
		
		for (let i = 0; i < size; i++){
			let random = obtenerNumeroAleatorio(0, this.songs.length - 1);
			let song = this.songs.splice(random, 1)[0];
			aux.push(song);
			
			//aux.push(this.songs.splice(
			//	obtenerNumeroAleatorio(0, this.songs.length - 1), 1)[0]);
		}
		
		this.songs = aux;
		this.currentSong = 0;
	}
	
	Playlist.prototype.nextSong = function(){
		if (this.currentSong < this.songs.length){
			this.currentSong++;
		}
		else {
			this.currentSong = 0;
		}
		
		return this.songs[this.currentSong];
	}
	
	
	Playlist.prototype.toString = function(){
		let texto = "";
		
		for (let song of this.songs){
			texto += song.getTitle() + "\n";
		}
		
		return texto;
	}
	
	Playlist.prototype.orderByDuration = function(){
		/*
		this.songs.sort(
			function (a, b){
				if (a.getDuration() > b.getDuration()) {
					return -1;
				}
				else if (a.getDuration() < b.getDuration()) {
					return 1;
				}
				else {
					return 0;
				}
			}
		);
		*/
		this.songs.sort(
			function (a, b){
				return b.getDuration() - a.getDuration();
			}
		);
		
	}
	
	Playlist.prototype.orderByAdditionDate = function(){		
		this.songs.sort(
			function (a, b){
				return a.getId() - b.getId();
			}
		);		
	}
	
	
	Playlist.prototype.top = function(){	
		let tops = new Array();
		for (let i = 0; i < this.songs.length; i++) {
			this.addBand(this.songs[i], tops);
		}
		
		tops.sort(
			function (a,b){
				return b.getOccurrences() - a.getOccurrences();
			}
		);
		
		tops = tops.slice(0, 5);

		return tops;
	}
	
	Playlist.prototype.addBand = function(song, bands){
		let index = -1;
		console.log("a");
		for (let j = 0; j < bands.length && index == -1; j++) {
			if (song.getBand() == bands[j].getName()){
				index = j;
			}
		}
		
		if (index != -1){ //sumar 1
			bands[index].addOcurrence();
		}
		else {//añadir la banda
			bands.push(new Top(song.getBand()));
		}
	}
	
	Playlist.prototype.toJSONObject = function(){
		let jPlaylist = {};
		
		jPlaylist.name = this.name;
		
		
		let jSongs = new Array();
		
		for (let song of this.songs) {
			jSongs.push(song.toJSONObject());
		}
		
		jPlaylist.songs = jSongs;
		
		return jPlaylist;
	}
	
	
	
	
	
	
	
	
	
	
}