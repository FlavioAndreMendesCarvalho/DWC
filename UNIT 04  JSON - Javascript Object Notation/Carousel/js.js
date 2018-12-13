$(document).ready(function () {
    conexion("thePhp", loadFotos);
});


function loadFotos(busqueda) {
    var ol = $("#carouselMooringsIndicator");
    var div = $("#carouselMooringsInner");
    var fotos = busqueda
    for (var i = 0; i < fotos.length; i++) {


        ol.append(liCreation(i));
        div.append(divCreator(i, imgCreator(fotos, i)));


    }
}

function liCreation(number) {
    var li = $("<li>");
    li.attr("data-target", "#carouselMoorings");
    li.attr("data-slide-to", number);
    if (number === 0) {
        li.addClass("active")
    }
    return li;
}

function divCreator(number, img) {
    var divItem = $("<div>");
    divItem.addClass("carousel-item");
    if (number === 0) {
        divItem.addClass("active");
    }
    divItem.append(img);
    return divItem;
}

function imgCreator(fotos, number) {
    var url = fotos[number].nom;
    var img = $("<h1>", {text: url});
    var div = $("<div>");
    div.css("width", "300px");
    div.css("height", "300px");
    div.addClass("bg-dark");
    div.addClass("d-flex");
    div.addClass("justify-content-center");
    div.addClass("align-items-center");
    div.addClass("text-center");
    div.addClass("w-100");
    div.attr("alt", url);
    div.append(img);
    return div
}