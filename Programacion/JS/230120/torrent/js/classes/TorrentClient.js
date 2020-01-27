function TorrentClient(){
	this.torrentList = new Array();
	
	//methods
	
	TorrentClient.prototype.addTorrent = function(torrent){		
		this.torrentList.push(torrent);
	}	
	TorrentClient.prototype.removeTorrent = function(torrent){	
		let position = -1;
		for (let i=0; i < this.torrentList.length && position == -1; i++){
				if(torrent.getId == this.torrentList[i].getId){
					position = i;
				}
				if (position != -1){

					this.torrentList.splice(position, 1);

				}
		}
	}
	TorrentClient.prototype.alphabeticSort = function(){	
		this.torrentList.sort(
			function(a,b) {
					return b - a;
			})
	}
	
	

	
	TorrentClient.prototype.downloadedSort = function (){
			this.torrentList.sort(
				function(a,b) {
						return b.getDownPerc() - a.getDownPerc();
			})
	
	}




}