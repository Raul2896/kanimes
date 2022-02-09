$(document).ready(function() {
    var botao = $('.popular');
    var dropDown = $('.animes');    
   
       botao.off('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   