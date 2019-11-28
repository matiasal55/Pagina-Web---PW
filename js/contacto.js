  function validar() {
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var email = document.getElementById("email").value;
      var tel = document.getElementById("tel").value;
//      var consulta = document.getSelection("consulta").value;
      var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


      if(nombre == "") {
        alert("Ingrese su nombre")
            return false;
      }

      if(apellido == "") {
        alert("Ingrese su apellido");
            return false;
      }

      if(email == ""){
        alert("Ingrese su email");
          return false;
      }

      if (!expresion.test(email)) {
        alert("La dirección de correo es incorrecta");
            return false;
     }

     if(tel.length !=0){
     if(tel.length !=8){
         alert("El número de teléfono debe contener 8 caracteres");
            return false;
        }
     }

     if(document.getElementById("texto").value=="") {
      alert("Debe ingresar la consulta");
      return false;
      }

      alert("Información enviada, nos contactaremos con usted a la brevedad");
      return true;
  }

$(document).ready(function(){

    $("input[type='tel']").each(function(){
        $(this).on("change keyup paste", function (e) {
            var output, $this = $(this), input = $this.val();
            if(e.keyCode != 8) {
                input = input.replace(/[^0-9]/g, '');
                var area = input.substr(0, 3);
                var pre = input.substr(0, 4);
                var tel = input.substr(4, 4);
//                if (area.length < 3) {
//                    output = "(" + area;
//                } else if (area.length == 3 && pre.length < 4) {
//                    output = "(" + area + ")" + " " + pre;
//                } else if (area.length == 3 && pre.length == 4) {
//                    output = "(" + area + ")" + " " + pre + "-" + tel; }
                if (pre.length < 4) {
                    output = pre;
                } else if (pre.length == 4) {
                    output = pre + "-" + tel; }
                $this.val(output);
            }
        });
    });

    var text_max = 1000;
    $('#textarea_feedback').html("0 / " + text_max);

    $('#texto').keypress(function() {
        var text_length = $('#texto').val().length+1;
        var text_remaining = text_max - text_length;
        if(text_length<text_max)
        $('#textarea_feedback').html(text_length + " / " +  + text_remaining);
        else {
            $('#textarea_feedback').html(text_length + " / " +  + text_remaining + " / Ya alcanzó el máximo permitido.");
            return false;
        }

    });

});
