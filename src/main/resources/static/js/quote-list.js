$(document).ready(function () {
    new DataTable('#example');

    $.ajax({
        type: "POST",
        url: "/aluminum-design/quote-list-all",
        contentType: "application/json;charset=utf-8",
        success: function (response) {
            var data = response;
            // Iterar sobre cada objeto en el array
            $('#example').DataTable().clear();

            // Iterar sobre cada objeto en el array
            $.each(data, function (index, quote) {
                var formattedDate = moment(quote.createdAt).format('DD [de] MMMM [del] YYYY HH:mm:ss');

                // Agregar una nueva fila a la tabla
                $('#example').DataTable().row.add([
                    quote.id,
                    quote.productName,
                    quote.width,
                    quote.height,
                    quote.side,
                    '$' + quote.total,
                    // Añade más columnas según tus atributos
                    formattedDate, // Usar la fecha formateada
                    (quote.state === true) ?
                            `<div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input check" id="cb${[index]}" checked>
                                        <label class="custom-control-label" for="cb${[index]}"></label>
                                      </div>` :
                            `<div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input btn" id="${[index]}">
                                        <label class="custom-control-label" for="${[index]}"></label>
                                      </div>`
                ]).draw();
            });
        },
        error: function () {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Ocurrió un error procesando la solicitud!"
            });
        }
    });


});