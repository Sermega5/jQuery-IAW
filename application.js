jQuery(document).ready(function () {
    $("#categorias li:first").text("TL")

    var nuevocurso = $('<li>RJA</li>')
    $("#categorias li:last").after(nuevocurso);
});