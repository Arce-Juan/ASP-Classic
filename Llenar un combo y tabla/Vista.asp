<%@ Language=VBScript %>
<%
Response.CacheControl = "no-cache"
Response.AddHeader "Pragma", "no-cache"
Response.Expires = -1
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">
        <title>Pregase - Ministerio de Cultura y Educación</title>
        <script type="text/javascript" SRC="librerias/jquery/3.4.0/jquery.min.js"></SCRIPT>
        <link rel="stylesheet" href="librerias/bootstrap/css/bootstrap.min.css" type="text/css"/>
        <SCRIPT LANGUAGE="JavaScript" SRC="librerias/bootstrap/js/bootstrap.min.js"></SCRIPT>
        <script type="text/javascript" SRC="CodigoVista.js"></SCRIPT>
        <script type="text/javascript" SRC="genericJS.js"></SCRIPT>
    </head>

    <body>
        <form name="frm" method="post" action="Vista_Controlador.asp">
            <div class="row" style="margin-bottom: 10px;">
                <div class="col-sm text-left" style="background-color:#e0e5ee">
                    <strong>Ejemplo Practico</strong>
                </div>
            </div>

            <div class="form-group row styleFormGroupSmall">
                <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm styleInputSmall">Plan Estudio</label>
                <div class="col-sm-8">
                    <select id="idSelectPlanesEstudio" name="nSelectPlanEstudio" class="form-control form-control-sm styleInputSmall" onchange="obtenerAlumnos()">
                    </select>
                </div>
            </div>

            <div class="row col-sm-5">
                <table id="idTablaAlumnos" class="table table-hover styleFormGroupSmall" name="nTablaAlumnos" border="1px">
                    <thead class="thead-dark">
                        <tr>
                            <th style="vertical-align: middle; text-align:center; padding: 2px; width: 25%;" scope="col"><b>Id</b></th>
                            <th style="vertical-align: middle; text-align:center; padding: 2px; width: 25%;" scope="col"><b>Apellido</b></th>
                            <th style="vertical-align: middle; text-align:center; padding: 2px; width: 25%;" scope="col"><b>Nombre</b></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <script type="text/javascript">
                obtenerPlanesEstudio();
            </script>
        </form>
    </body>
</html>