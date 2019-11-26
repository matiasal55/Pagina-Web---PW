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
    var dos= document.getElementsByClassName("formulario").firstChild;
    if(!(Object.is(uno,dos))){
        uno.remove();
    }else
        uno.children().val("");
    num--;
    document.getElementById("precio").innerHTML="$"+num*precio;

}
