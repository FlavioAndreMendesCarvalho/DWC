$(document).ready(function () {
    conexion(fun);
});


function fun(busqueda) {
    var vaixells = busqueda;

    for (c in vaixells) {

        var nom = vaixells[c].nom;
        var matricula = vaixells[c].matricula;


        var item = $("<option/>", {value: matricula, text: nom + ", " + matricula});
        $("#meuSelect").append(item);
    }
}
