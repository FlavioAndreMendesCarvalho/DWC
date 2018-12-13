

$(document).ready(function(){
    conexion("thePhp", fun);
});




function fun(busqueda) {
    var vaixells = busqueda;

    for (c in vaixells) {

        var nom = vaixells[c].nom;
        var matricula = vaixells[c].matricula;


        var item = $("<a/>", {href:"#", class:'dropdown-item', text:nom + ", " + matricula});
        $("#meuDrop").append(item);

    }
}