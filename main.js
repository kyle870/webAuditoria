var x = document.getElementById('perfil');
var y = document.getElementById('caracteristicas');
var z = document.getElementById('competencias');

var imagen = document.getElementById('auditImg');
var div_principal = document.getElementById('main');



document.getElementById('perfilHref').onclick = function () {
    if (x.style.display === 'none' && imagen.style.display === 'block') {
        x.style.display = 'block'
        y.style.display = 'none'
        z.style.display = 'none'
        imagen.style.float = 'right'
    } else {
        imagen.style.display = 'block'
        imagen.style.float = 'none'
        x.style.display = 'none'
        y.style.display = 'none'
        z.style.display = 'none'
    }
}

document.getElementById('caracteristicasHref').onclick = function () {
    if (y.style.display === 'none' && imagen.style.display === 'block') {
        x.style.display = 'none'
        y.style.display = 'block'
        z.style.display = 'none'
        imagen.style.float = 'right'
    } else {
        imagen.style.display = 'block'
        imagen.style.float = 'none'
        x.style.display = 'none'
        y.style.display = 'none'
        z.style.display = 'none'
    }
}

document.getElementById('competenciasHref').onclick = function () {
    if (z.style.display === 'none' && imagen.style.display === 'block') {
        x.style.display = 'none'
        y.style.display = 'none'
        z.style.display = 'block'
        imagen.style.float = 'right'
    } else {
        imagen.style.display = 'block'
        imagen.style.float = 'none'
        x.style.display = 'none'
        y.style.display = 'none'
        z.style.display = 'none'
    }
}