function cambiarColor(color){
    if(color==1){
        document.getElementById("colorcard").style="color: red";
    } else if(color==2){
        document.getElementById("colorcard").style="color: blue";
    } else if(color==3){
        document.getElementById("colorcard").style="color: green";
    } else if(color==4){
        document.getElementById("colorcard").style="color: black";
    }
}

function cambiarTamano(tamano){
    if(tamano==1){
        document.getElementById("colorcard").style="font-size: 12px";
    } else if(tamano==2){
        document.getElementById("colorcard").style="font-size: 14px";
    } else if(tamano==3){
        document.getElementById("colorcard").style="font-size: 18px";
    } else if(tamano==4){
        document.getElementById("colorcard").style="font-size: 20px";
    } else if(tamano==5){
        document.getElementById("colorcard").style="font-size: 24px";
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
    document.getElementById("nombre")
}
