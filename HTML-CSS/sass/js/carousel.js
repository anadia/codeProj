$(function(){
        $('#carouselExampleControls.slide').carousel({
            interval: 5000,
            pause: "hover"
        });
  
    $('input').focus(function(){
       $("#carouselExampleControls").carousel('pause');
    }).blur(function() {
       $("#carouselExampleControls").carousel('cycle');
    });
})
