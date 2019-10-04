function controlarSessionDeUsuario(){
    var req = new XMLHttpRequest();
    var data;
    req.open("GET", "/pregase/resources/library/nuevosJsCss/LUA_ControlarSessionDeUsuario.asp", true);
    req.onload = function() {
        if (req.status == 200) {
            data = req.response;
            if (data == "FAUL"){
                var URLactual = "/pregase/close_session.asp";
                location.href = URLactual;
            }
        }
        else {
            alert("ocurrio un error: No se encontro loa pagina solicitada.-");
        }
    };
    req.send();
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function bloquearBody(valor) {
    if (document.getElementById("divContenedor")) {
        var divCont = $("#divContenedor");
        if (valor == "SI") {
            divCont.html('<div aling="center" id="_evidon-background" style="background: rgb(151, 151, 151); opacity: 0.5; position: fixed; top: 0px; left: 0px; bottom: 0px; width: 100%;height:100%; "><img id="miCarga" style="position: fixed;top: 50%;left: 50%;margin-top: -50px;margin-left: -50px;" class="imgr" src="/pregase/images/favicon.ico"></div>');
        }
        else {
            divCont.html("");
        }
    }
    else {
        alert("El elemento divContenedor no existe..Debe agregarlo para bloquear la pantalla.");
    }
}

function genericObtenerColeccion(op, controlador, element, itemSelected) {
    controlarSessionDeUsuario();
    var req = new XMLHttpRequest();
    req.open("GET", controlador + "?op=" + op, true);
    req.onload = function () {
        if (req.status == 200) {
            //console.log(req.response);
            if (IsJsonString(req.response)) {
                data = JSON.parse(req.response);
                var elem = $("#" + element);
                elem.empty(); // Limpiamos el contenedor
                var s = "<option value=''>-elija-</option>";
                $.each(data.Coleccion, function (i, item) {
                    s += "<option value='" + item.id + "'>" + item.descripcion + "</option>";
                });
                elem.html(s);
                if (itemSelected != '' && itemSelected != null) {
                    elem.val(itemSelected);
                }
            }
            else {
                alert("El Json no es valido.-");
            }
        }
        else {
            alert("ocurrio un error: No se encontró la pagina solicitada. 'lua_AltaDeAlumnosOmitidosOnline_Controlador' -");
        }
    }
    req.send();
}
