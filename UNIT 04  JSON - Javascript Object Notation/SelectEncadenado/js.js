var select1 = $("#select1");
var select2 = $("#select2");


$(document).ready(function () {
    organizador();
    conexion("php1", loadPort);
});

function organizador() {
    select2.prop("disabled", true);
    select1.change(function () {
        var valorSeleccionado1 = $(this).val();
        select2.prop("disabled", false);
        select2.empty();
        conexionPar("php2", "idPort=" + valorSeleccionado1, loadZona);
    });
}

function loadPort(busqueda) {
    var port = busqueda;
    for (c in port) {
        var idPort = port[c].idPort;
        var nom = port[c].nom;
        var item = $("<option/>", {value: idPort, text: nom});
        select1.append(item);
    }
}

function loadZona(busqueda) {
    var zonas = busqueda;
    var item0 = $("<option/>", {value: "0", text: "Selecciona"});
    select2.append(item0);
    for (c in zonas) {
        var idZona = zonas[c].idZona;
        var item = $("<option/>", {value: idZona, text: idZona});
        select2.append(item);
    }
}
