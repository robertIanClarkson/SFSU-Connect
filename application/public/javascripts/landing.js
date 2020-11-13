

$('#submitButton').click(function() {
    var type = $('#option').val();
    var searchText = $('#search-input').val();

    searchData = {
        category: currentCategory,
        text: searchText,
        type: type
    }
    window.location.href = (`/searchF?category=${currentCategory}&text=${searchText}&type=${type}`)
});
