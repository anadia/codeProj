function sumar(a,b){
    return a+b;

}


function restar(a,b){
    return a-b;
}
/* console.log(sumar(2,3));
console.log(restar(2,3)); */

exports.sumar=sumar; //formato exports ponemos el nombre suma a la funcion sumar
exports.restar=restar;