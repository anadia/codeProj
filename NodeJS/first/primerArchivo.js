console.log("Primer ARCHIVO")


function funcionPrincipal(callback){

    console.log("hago algo y llamo al callback avisando que termine");
    callback();
}



function otra(){

    console.log("termino de hacer algo");

}

funcionPrincipal(otra);