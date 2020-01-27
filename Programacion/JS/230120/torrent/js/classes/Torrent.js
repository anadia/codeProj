function Torrent(id,title,duration,downloadedKb,type){
	this.id = id;
	this.title = title;
	this.duration= duration;
	this.downloadedKb= downloadedKb;
	this.type=type;
	
	//methods
	
	Torrent.prototype.setId = function (id){
		this.id = id;
	}
	
	Torrent.prototype.getId = function (){
		return this.id;
	}
	
	Torrent.prototype.setTitle = function (title){
		this.title = title;
	}
	
	Torrent.prototype.getTitle = function (){
		return this.title;
	}
	
	
	Torrent.prototype.setDuration = function (duration){
	this.duration = duration;
	}
	
	Torrent.prototype.getDuration = function (){
		return this.duration;
	}
	
	
	Torrent.prototype.setDownloadedKb = function (downloadedKb){
		this.downloadedKb = downloadedKb;
	}
	
	Torrent.prototype.getDownPerc = function (downloadedKb){
		let percentDownloaded = duration/downloadedKb;
		return this.percentDownloaded;
	}
	
	
	
	
	Torrent.prototype.setType = function (type){
		this.type = type;
	}
	
	Torrent.prototype.getType = function (){
		let text ="";
		switch (this.type){
			case Torrent.JPG:
			text = "jpg";
			break;
			case Torrent.AVI:
			text = "avi";
			break;			
			case Torrent.MP4:
			text = "mp4";
			break;			
			default:
			text="error"
			break;
		}
		return text;
	}
	
	
	
}
Torrent.JPG = 1;
Torrent.AVI = 2;
Torrent.MP4 = 3;