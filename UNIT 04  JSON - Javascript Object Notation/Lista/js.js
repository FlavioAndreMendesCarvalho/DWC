$(document).ready(function () {
    conexion("thePhp", fun);
});


function fun(busqueda) {
    var vaixells = busqueda;

    for (c in vaixells) {

        var nom = vaixells[c].nom;
        var matricula = vaixells[c].matricula;


        var item = $("<li/>", {text: nom + ", " + matricula});
        item.addClass("list-group-item");
        $("#miLista").append(item);
    }
}
