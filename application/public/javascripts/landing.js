

$('#submitButton').click(function() {
    var type = $('#option').val();

    searchData = {
        type: type
    }
    console.log(type)
    if (type != null)
        $.post( "searchF",searchData)
            .done((result) => {
                document.write(result);
                document.close();
                console.log(document.cookie)
            });
});
