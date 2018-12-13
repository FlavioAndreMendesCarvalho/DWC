$(document).ready(function () {
    conexion("thePhp", loadPersona);
});

function loadPersona(busqueda) {
    var reserva = busqueda;
    for (c in reserva) {
        var idReserva = reserva[c].idReserva;
        var dniClient = reserva[c].dniClient;
        var data_inici = reserva[c].data_inici;
        var data_fi = reserva[c].data_fi;
        var nouTR = $("<tr/>");
        var nouTH = $("<th/>", {scope: 'row', text: idReserva});
        nouTR.append(nouTH);

        var nouTD = $("<td/>", {text: dniClient});
        nouTR.append(nouTD);
        var nouTD2 = $("<td/>", {text: data_inici});
        nouTR.append(nouTD2);
        var nouTD3 = $("<td/>", {text: data_fi});
        nouTR.append(nouTD3);
        $("#mevaTable").children("tbody").append(nouTR);
    }
}