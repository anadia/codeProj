function Poligono(lado,diagonal, area, color){
    this.lado = lado;
    this.color = color;
    this.diagonal = diagonal;
    this.area = area;

    Poligono.prototype.getLado = function (){
        return  this.lado;
    }

    Poligono.prototype.getColor = function (){
        return  this.color;
    }

    Poligono.prototype.getDiagonal = function (){
        return  this.diagonal;
    }

    Poligono.prototype.setLado = function (ladO){
        this.lados = lado;
    }

    Poligono.prototype.setColor = function (color){
        this.color = color;
    }

    Poligono.prototype.setDiagonal = function (diagonal){
        this.diagonal = diagonal;
    }
}