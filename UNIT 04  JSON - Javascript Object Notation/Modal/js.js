$(document).ready(function () {
    conexion("thePhp", fun);
});


function fun(busqueda) {
    var vaixells = busqueda;

    for (c in vaixells) {

        var nom = vaixells[c].nom;
        var matricula = vaixells[c].matricula;
        var calat = vaixells[c].calat;
        var eslora = vaixells[c].eslora;
        var maniga = vaixells[c].maniga;

        $("#titulo").text(nom);
        $("#contenido1").text("matricula: " + matricula);
        $("#contenido2").text("calat: " + calat);
        $("#contenido3").text("eslora: " + eslora);
        $("#contenido4").text("maniga: " + maniga);

    }
}
