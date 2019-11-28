$(document).ready(function(){

    $("#acumulador").html(sessionStorage.clickcount);

    $(".comprar").click(function(){
        if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
        $("#acumulador").html(sessionStorage.clickcount);
    });

});
