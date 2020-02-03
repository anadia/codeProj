function VideoGame (name, price){
    this.id = new Date().getTime();
    this.name = name;
    this.price = price;


}

VideoGame. PLAT_XBOX360 = 1;
VideoGame. PLAT_PS4 = 2;
VideoGame. PLAT_SWITCH = 3;

VideoGame.GENRE_ACTION = 1;
VideoGame.GENRE_PLATFORM = 2;
VideoGame.GENRE_FPS = 3;

VideoGame.STATE_AVAILABLE = 1;
VideoGame.STATE_RESERVED = 2;
VideoGame.STATE_SOLD = 3;

