var num=1;

function agregarPersona(precio){
	var uno = document.getElementById("inscripcion");
	var dos = uno.cloneNode(true);
    $(dos).children().val("");
	document.getElementById("contenedor").appendChild(dos);
    num++;
    document.getElementById("precio").innerHTML="$"+num*precio;

}

function eliminarPersona(elemento,precio) {
    var uno =elemento.parentNode;
    var tamanio= $(".formulario").length;
    if(tamanio>1){
        uno.remove();
    }else
        $(".primeraFila").val("");
    if(num>1)
        num--;
    document.getElementById("precio").innerHTML="$"+num*precio;
}

function personasInscriptas() {
    var personas=document.getElementsByClassName("primeraFila");
    var cantidadDePersonas=$(".formulario").length;
    var mensaje="";
    var camposCompletos=false;

    for(var i=0;i<personas.length;i++){
        if(personas[i].value!="")
            camposCompletos=true;
        else
            camposCompletos=false;
    }

    if(camposCompletos){
        mensaje="<p>Personas inscriptas: </p>"
        for(var i=0;i<cantidadDePersonas;i++){
            mensaje+="Nombre: " + personas[0].value + " - Apellido: " + personas[1].value + " - DNI: " + personas[2].value + ".";
            mensaje+="<br>";
        }
    }
    else
        mensaje="<p>No hay personas inscriptas.</p>"
    document.getElementById("personasInscriptas").innerHTML=mensaje;
}
