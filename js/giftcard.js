function cambiarColorRojo(){
        document.getElementById("textoCard").style="color: red";
    }
function cambiarColorAzul(){
        document.getElementById("textoCard").style="color: blue";
    }
function cambiarColorVerde(){
        document.getElementById("textoCard").style="color: green";
    }

function cambiarColorNegro(){
        document.getElementById("textoCard").style="color: black";
    }

function cambiarTamano(tamano){
    if(tamano==1){
        document.getElementById("nombre").style="font-size: 12px";
        document.getElementById("valor").style="font-size: 12px";
    } else if(tamano==2){
        document.getElementById("nombre").style="font-size: 14px";
        document.getElementById("valor").style="font-size: 14px";
    } else if(tamano==3){
        document.getElementById("nombre").style="font-size: 18px";
        document.getElementById("valor").style="font-size: 18px";
    } else if(tamano==4){
        document.getElementById("nombre").style="font-size: 20px";
        document.getElementById("valor").style="font-size: 20px";
    } else if(tamano==5){
        document.getElementById("nombre").style="font-size: 24px";
        document.getElementById("valor").style="font-size: 24px";
    }
}

function cambiarFondo(color){
    if(color==1){
        document.getElementById("colorcard").style="background-color: red";
    } else if(color==2){
        document.getElementById("colorcard").style="background-color: blue";
    } else if(color==3){
        document.getElementById("colorcard").style="background-color: green";
    } else if(color==4){
        document.getElementById("colorcard").style="background-color: black";
    }
}

function completarNombre(){
    if($("#nombreCompleto").val()!=""){
	var nombre=document.getElementById("nombreCompleto").value;
    var nombreDos=nombre.toUpperCase();
	document.getElementById("nombre").innerHTML=nombreDos;
    }
    else {
        document.getElementById("nombre").innerHTML="NOMBRE";
    }
}

function completarMonto(){
    if($("#saldo").val()!=""){
	var nombre=document.getElementById("saldo").value;
	document.getElementById("valor").innerHTML=nombre;
    }
    else {
        document.getElementById("valor").innerHTML="Valor";
    }
}

function cambiarPosicion(valor){
        if(valor==1)
            document.getElementById("fecha").style.textAlign="left";
        else if(valor==2)
            document.getElementById("fecha").style.textAlign="center";
        else if(valor==3)
            document.getElementById("fecha").style.textAlign="right";
    }

$(document).ready(function(){
   $("#confirmacion").click(function(){
       var mensaje="";
       var valorNombre=$("#nombreCompleto").val();
       var valorSaldo=$("#saldo").val();

       if(valorNombre!="" && valorSaldo!=""){
            mensaje="<p>Muchas gracias por su compra. Su gift card será enviada a su casilla de correo</p>";
            $("form").trigger("reset");
       }
      if(valorNombre=="")
           mensaje+="<p>Falta completar nombre</p>";
       if(valorSaldo=="")
           mensaje+="<p>Falta completar saldo</p>";
       $("#mensaje").html(mensaje);

       /*if($("#nombreCompleto").val()=="" && contadorMensajeOK==0){
           mensaje="<p>Faltó poner el nombre del destinatario</p>";
           $("#personalizacion").append(mensaje);
           contadorMensajeOK++;
       }
       else {
           contadorMensajeOK=0;
       }

       if($("#saldo").val()=="" && contadorMensajeOK==0 || contadorMensajeOK==1){
           mensaje="<p>Faltó poner el monto</p>";
           $("#personalizacion").append(mensaje);
           contadorMensajeOK++;
       }
       else {
           contadorMensajeOK=0;
       }

       if($("#nombreCompleto").val()!="" && $("#saldo").val()!="" && contadorMensajeOK==0){
        mensaje="<p>Muchas gracias por su compra. Su gift card será enviada a su casilla de correo</p>";
        $("#personalizacion").append(mensaje);
        contadorMensajeOK++;
       }*/

   });
});

