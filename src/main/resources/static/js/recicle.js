$(document).ready(function () {

    $('#contactForm').submit(function (e) {
        e.preventDefault();
    });
    $('#sendRecicle').on('click', function () {

        var name = $('#name').val();
        var width = $('#width').val();
        var height = $('#height').val();

        if (name == '' || width == '' || height == '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Los campos no pueden estar vacios!"
            });
        } else {
            var dataSend = {'name': name, 'width': width, 'heigth': height};
            $.ajax({
                type: "POST",
                url: "/aluminum-design/save-recicle",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(dataSend),
                success: function (response) {
                    if (response === 'OK') {
                        Swal.fire({
                            icon: "success",
                            title: "¡Registro almacenado con éxito!"
                        });
                        $('#name').val('');
                        $('#height').val('');
                        $('#width').val('');
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "¡Ocurrió un error, intenta más tarde!"
                        });
                    }
                },
                error: function () {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "¡Ocurrió un error procesando la solicitud!"
                    });
                }
            });
        }

    });
});