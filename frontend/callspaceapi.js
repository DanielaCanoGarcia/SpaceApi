var url = "http://localhost:8080/api/space";

function postDato() {

    console.log(url);

    var myName = $("#name").val();
    var myImage = $("#image").val();
    var myDescription = $("#description").val();

    var mydato = {
        name: myName,
        image: myImage,
        description: myDescription
    };
    console.log(mydato);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $("#resultado").html(JSON.stringify(data.space));
        },
        data: JSON.stringify(mydato)
    });
        }
    
function getDatos() {
    console.log(url);
    
    $.getJSON(url, 
        function (json) {
        console.log(json);

        var arrDatos = json.Datos;

        var htmlTableSpace = '<table border="1">';

        arrDatos.forEach(function (item) {
            console.log(item);
            htmlTableSpace += '<tr>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.image + '</td>' +
                '<td>' + item.description + '</td>' +
                '</tr>';
        });
        htmlTableSpace += '</table>';

        $("#resultado").html(htmlTableSpace);
        
         }
    );
}