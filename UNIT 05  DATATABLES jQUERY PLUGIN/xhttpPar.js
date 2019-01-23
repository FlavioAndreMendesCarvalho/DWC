function conexionPar(phpName, nameParAndValue, funPar) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var busqueda = JSON.parse(this.responseText);
            funPar(busqueda);
        }
    };

    xhttp.open("GET", phpName + ".php?" + nameParAndValue, true);
    xhttp.send();
}