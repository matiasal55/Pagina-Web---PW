$(document).ready(function(){
   $("body").
});

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
	var nombre=document.getElementById("nombreCompleto").value;
	document.getElementById("nombre").innerHTML=nombre;
}

function completarMonto(){
	var nombre=document.getElementById("saldo").value;
	document.getElementById("valor").innerHTML=nombre;
}

function cambiarPosicionIzquierda(){

        document.getElementById("fecha").style.textAlign="left";
    }


