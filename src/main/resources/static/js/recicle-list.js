$(document).ready(function () {
    new DataTable('#example');

    $.ajax({
        type: "GET",
        url: "/aluminum-design/recicle-list-all",
        contentType: "application/json;charset=utf-8",
        success: function (response) {
            var data = response;
            // Iterar sobre cada objeto en el array
            $('#example').DataTable().clear();

            // Iterar sobre cada objeto en el array
            $.each(data, function (index, recicle) {
                $('#example').DataTable().row.add([
                    recicle.name,
                    recicle.width,
                    recicle.heigth,
                    (recicle.state === true) ?
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