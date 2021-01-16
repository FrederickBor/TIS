var puntuacion = 0;

var noticias = {
    1: {
        titulo:"Aumentar el uso de las redes sociales triplica el riesgo de depresión",
        url:"https://www.larazon.es/salud/20201210/boa5udp37rcqtlt4qxokhwpfcq.html"
    },
    2: {
        titulo:"Alcance e impresiones de las redes sociales",
        url:"https://www.doctormetrics.com/alcance-impresiones-redes-sociales/"
    },
    3: {
        titulo:"Efectos de las redes sociales en la salud mental",
        url:"https://www.bbc.com/mundo/noticias-39974688"
    },
    4: {
        titulo:"Influencia de las redes sociales en nuestra salud",
        url:"https://www.oximesa.es/blog/las-redes-sociales-influyen-en-nuestra-salud/"
    },
    5: {
        titulo:"Salud mental de los jovenes que usan redes sociales",
        url:"http://www.infocop.es/view_article.asp?id=7686"
    },
    6: {
        titulo:"Riesgos de las redes sociales en la salud mental",
        url:"https://faros.hsjdbcn.org/es/articulo/riesgos-redes-sociales-salud-mental-adolescentes"
    },
    7: {
        titulo:"Cómo combatir la adicción a las redes sociales",
        url:"https://www.iberdrola.com/compromiso-social/como-afectan-redes-sociales-jovenes"
    },
    8: {
        titulo:"Cómo nos afecta el uso de las redes sociales",
        url:"https://blog.aesdigital.es/uso-de-las-redes-sociales-como-nos-afecta/"
    },
    9: {
        titulo:"El impacto de las redes sociales en la sociedad",
        url:"https://estudioalfa.com/el-impacto-de-las-redes-sociales-en-la-sociedad"
    },
    10: {
        titulo:"Así pueden perjudicar tu vida las redes sociales",
        url:"https://www.elperiodico.com/es/ser-feliz/20190423/efectos-negativos-redes-sociales-7409366"
    }
}

// Math.floor(Math.random() * 10); 

$( document ).ready(function() {
    var lista = new Array();

    while (lista.length < 4) {
        var numero = Math.floor(Math.random() * 10) + 1; 
        if (!lista.includes(numero)){
            lista.push(numero);
        }
    }

    var html_noticias = "";

    $.each(lista, function(index, value){
        html_noticias += `
        <div class='col py-3'>
            <div class='card shadow-sm'>  
            <div class='card-body'>
                <p class='card-text'>` + noticias[value].titulo + `</p>
                <div class='d-flex justify-content-between align-items-center'>
                <div class='btn-group'>
                    <a href='` + noticias[value].url + `' class='btn btn-outline-info' role='button'>Ver noticia</a>
                </div>
                </div>
            </div>
            </div>
        </div> 
        `
    });

    $("#noticias_final").html(html_noticias)
});

// ACCIONES PREGUNTA 1

$("#p1si").on("click", function () {
    $("#pregunta2").removeClass("hide");
    $("#pregunta1").addClass("hide");
});

$("#p1no").on("click", function () {
    $("#pregunta2").removeClass("hide");
    $("#pregunta1").addClass("hide");
    puntuacion = puntuacion + 1;
});

// FIN ACCIONES PREGUNTA 1

// ACCIONES PREGUNTA 2

$("#p2si").on("click", function () {
    $("#pregunta3").removeClass("hide");
    $("#pregunta2").addClass("hide");
});

$("#p2no").on("click", function () {
    $("#pregunta3").removeClass("hide");
    $("#pregunta2").addClass("hide");
    puntuacion = puntuacion + 1;
});

// FIN ACCIONES PREGUNTA 2

// ACCIONES PREGUNTA 3

$("#p3si").on("click", function () {
    $("#pregunta4").removeClass("hide");
    $("#pregunta3").addClass("hide");
});

$("#p3no").on("click", function () {
    $("#pregunta4").removeClass("hide");
    $("#pregunta3").addClass("hide");
    puntuacion = puntuacion + 1;
});

// FIN ACCIONES PREGUNTA 3

// ACCIONES PREGUNTA 4

$("#p4si").on("click", function () {
    $("#pregunta5").removeClass("hide");
    $("#pregunta4").addClass("hide");
});

$("#p4no").on("click", function () {
    $("#pregunta5").removeClass("hide");
    $("#pregunta4").addClass("hide");
    puntuacion = puntuacion + 1;
});

// FIN ACCIONES PREGUNTA 4

// ACCIONES PREGUNTA 5

$("#p5si").on("click", function () {
    $("#pregunta6").removeClass("hide");
    $("#pregunta5").addClass("hide");
});

$("#p5no").on("click", function () {
    $("#pregunta6").removeClass("hide");
    $("#pregunta5").addClass("hide");
    puntuacion = puntuacion + 1;
});

// FIN ACCIONES PREGUNTA 5

// ACCIONES PREGUNTA 6

$("#p6si").on("click", function () {
    $("#pregunta7").removeClass("hide");
    $("#pregunta6").addClass("hide");
});

$("#p6no").on("click", function () {
    $("#pregunta7").removeClass("hide");
    $("#pregunta6").addClass("hide");
    puntuacion = puntuacion + 1;
});

// FIN ACCIONES PREGUNTA 6

// ACCIONES PREGUNTA 7

$("#p7r1").on("click", function () {
    puntuacion = puntuacion + 4;
    $("#paginaFinal").removeClass("hide");
    $("#pregunta7").addClass("hide");
    barra_de_carga();
});

$("#p7r2").on("click", function () {
    puntuacion = puntuacion + 3;
    $("#paginaFinal").removeClass("hide");
    $("#pregunta7").addClass("hide");
    barra_de_carga();
});

$("#p7r3").on("click", function () {
    puntuacion = puntuacion + 2;
    $("#paginaFinal").removeClass("hide");
    $("#pregunta7").addClass("hide");
    barra_de_carga();
});

$("#p7r4").on("click", function () {
    puntuacion = puntuacion + 1;
    $("#paginaFinal").removeClass("hide");
    $("#pregunta7").addClass("hide");
    barra_de_carga();
});

$("#p7r5").on("click", function () {
    $("#paginaFinal").removeClass("hide");
    $("#pregunta7").addClass("hide");
    barra_de_carga();
});

// FIN ACCIONES PREGUNTA 7


// ACCCIONES BARRA DE CARGA

function barra_de_carga() {
    var color = "danger";
    var porcentaje = puntuacion * 10;
    var mensaje = "";

    switch (puntuacion) {
        case 0:
        case 1:
        case 2:
            color = "danger"
            mensaje = "Puede generar insomnio, baja autoestima, ansiedad y depresión entre otros problemas.";
            break;
        case 3:
        case 4:
        case 5:
            color = "warning";
            mensaje = "Pueden surgir algunos problemas. Ahora puede que no lo notes pero se puede convertir en una adicción si le sigues dedicando tanto tiempo";
            break;
        case 6:
        case 7:
        case 8:
            color = "primary";
            mensaje = "Lo recomendable es no superar las 2 horas. Hay que tener en cuenta que las redes sociales tienen un lado negativo y por lo tanto no deberíamos abusar de ellas.";
            break;
        case 9:
        case 10:
            color = "success";
            mensaje = "Puedes disfrutar de las ventajas de utilizar estos medios. Pero recuerda que no es gratis, estás pagando con tu atención a los anuncios (tus datos).";
            break;
        default:
            color = "danger"
            mensaje = "Puede generar insomnio, baja autoestima, ansiedad y depresión entre otros problemas.";
            break;
    }

    $("#right_progress_bar").removeClass("border-danger");
    $("#right_progress_bar").removeClass("border-warning");
    $("#right_progress_bar").removeClass("border-primary");
    $("#right_progress_bar").removeClass("border-success");
    $("#left_progress_bar").removeClass("border-danger");
    $("#left_progress_bar").removeClass("border-warning");
    $("#left_progress_bar").removeClass("border-primary");
    $("#left_progress_bar").removeClass("border-success");
    $("#left_progress_bar").addClass("border-" + color);
    $("#right_progress_bar").addClass("border-" + color);

    $("#loading_value").text(porcentaje + "%");
    $("#mensaje_final").text(mensaje);

    $(".progress").each(function () {

        var value = porcentaje;
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');
    
        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }
    
    });
};

function percentageToDegrees(percentage) {
    return percentage / 100 * 360
};

// FIN ACCCIONES BARRA DE CARGA

// ACCION VOLVER AL INICIO

$("#iniciar").on("click",function(){
    $("#pregunta1").removeClass("hide");
    $("#pregunta2").addClass("hide");
    $("#pregunta3").addClass("hide");
    $("#pregunta4").addClass("hide");
    $("#pregunta5").addClass("hide");
    $("#pregunta6").addClass("hide");
    $("#pregunta7").addClass("hide");
    $("#paginaFinal").addClass("hide");
    puntuacion = 0;
});

// FIN ACCION VOLVER AL INICIO