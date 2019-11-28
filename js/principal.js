$(document).ready(function(){
    $(window).resize(function(){
        if($(this).width()>=600){
        $("#iconoMenu").click(function(){
                $(".menu").toggle(500);
            });
        }
    });
});


