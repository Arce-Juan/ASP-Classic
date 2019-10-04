function obtenerPlanesEstudio() {
    var req = new XMLHttpRequest();
    req.open("GET", "Vista_Controlador.asp?op=planesEstudio", true);
    req.onload = function () {
        if (req.status == 200) {
            console.log(req.response);
            if (IsJsonString(req.response)) {
                data = JSON.parse(req.response);
                console.log(data);
                var elem = $("#idSelectPlanesEstudio");
                elem.empty(); // Limpiamos el contenedor
                var s = "<option value=''>-elija-</option>";
                $.each(data.ListaPlanesEstudio, function (i, item) {
                    s += "<option value='" + item.idPlan + "'>" + item.descripcion + "</option>";
                });
                elem.html(s);
            }
            else {
                alert("El Json no es valido.-");
            }
        }
        else {
            alert("ocurrio un error: No se encontro la pagina solicitada. 'Vista_Controlador.asp' -");
        }
    }
    req.send();
}

function obtenerAlumnos(){
    //controlarSessionDeUsuario();
    var req = new XMLHttpRequest();
    req.open("GET", "Vista_Controlador.asp?op=alumnos", true);
    req.onload = function() {
        if (req.status == 200) {
            console.log(req.response);
            if (IsJsonString(req.response)){
                data = JSON.parse(req.response);
                $('#idTablaPlanesEstudio tbody tr').remove();
                var s = "";
                $.each(data.ListaAlumnos, function (i, item) {
                    s += "<tr id='idFila" + i + "'>";
                    s += "<td>" + item.idAlumno + "</td>"
                    s += "<td>" + item.Apellido + "</td>"
                    s += "<td>" + item.Nombre + "</td>"
                    s += "</tr>";
                    $("#idTablaAlumnos").append(s);
                    s="";
                });
            }
            else{
                alert("El Json no es valido.-");
            }
        }
        else {
            alert("ocurrio un error: No se encontró la pagina solicitada. 'lua_AltaDeAlumnosOmitidosOnline_Controlador' -");
        }
    }
    req.send();
}
