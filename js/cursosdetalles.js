var mostrar1=0;
var mostrar2=0;
var mostrar3=0;

$(document).ready(function(){
    $("#encabezado1").click(function(){
       if(mostrar1==0){
           $("#lista1").toggle(function(){
           $("#lista1").show();
           $("#masDetalles1").empty();
           $("#masDetalles1").append("Menos");
            mostrar1=1;
        });
       }
    else {
        $("#lista1").toggle(function(){
            $("#lista1").hide();
           $("#masDetalles1").empty();
           $("#masDetalles1").append("Mas");
            mostrar1=0;
       });
    }
    });

    $("#encabezado2").click(function(){
       if(mostrar2==0){
           $("#lista2").toggle(function(){
           $("#lista2").show();
           $("#masDetalles2").empty();
           $("#masDetalles2").append("Menos");
            mostrar2=1;
        });
       }
    else {
        $("#lista2").toggle(function(){
            $("#lista2").hide();
           $("#masDetalles2").empty();
           $("#masDetalles2").append("Mas");
            mostrar2=0;
       });
    }
    });

    $("#encabezado3").click(function(){
       if(mostrar3==0){
           $("#lista3").toggle(function(){
           $("#lista3").show();
           $("#masDetalles3").empty();
           $("#masDetalles3").append("Menos");
            mostrar3=1;
        });
       }
    else {
        $("#lista3").toggle(function(){
            $("#lista3").hide();
           $("#masDetalles3").empty();
           $("#masDetalles3").append("Mas");
            mostrar3=0;
       });
    }
    });

});
