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
