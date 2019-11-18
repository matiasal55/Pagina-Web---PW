//function agregarPersona(){
//    var campoNombre=document.createElement("Input");
//    campoNombre.setAttribute("type","text");
//    campoNombre.setAttribute("placeholder","Nombre");
//    var campoApellido=document.createElement("Input");
//    campoApellido.setAttribute("type","text");
//    campoApellido.setAttribute("placeholder","Apellido");
//    var campoDNI=document.createElement("Input");
//    campoDNI.setAttribute("type","text");
//    campoDNI.setAttribute("placeholder","DNI");
//    var botonEliminar=document.createElement("Input");
//    botonEliminar.setAttribute("type","button");
//    botonEliminar.setAttribute("value","-");
//    botonEliminar.setAttribute("class","addOrDelete");
//    botonEliminar.setAttribute("onclick","eliminarCampo");
//    document.getElementById("inscripcion").appendChild(campoNombre);
//    document.getElementById("inscripcion").appendChild(campoApellido);
//    document.getElementById("inscripcion").appendChild(campoDNI);
//    document.getElementById("inscripcion").appendChild(botonEliminar);
//}

function agregarPersona(){
	var uno = document.getElementById("inscripcion");
	var dos = uno.cloneNode(true);
    $(dos).children().val("");
	document.getElementById("inscripcion").appendChild(dos);
}
