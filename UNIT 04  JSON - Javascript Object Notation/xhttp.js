function conexion(fun) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var busqueda = JSON.parse(this.responseText);
            fun(busqueda);
        }
    };

    xhttp.open("GET", "thePhp.php", true);
    xhttp.send();
}