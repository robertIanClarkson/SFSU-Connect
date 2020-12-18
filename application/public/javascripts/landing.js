// Used as a referance
var filters = {
    1: 'price:high->low',
    2: 'price:low->high',
    3: 'date:old->new',
    4: 'date:new->old'
}

// Used to make a search query from the landing page
$('#submitButton').click(function() {
    var filter = $('#option').val()
    var searchText = $('#search-input').val()
    var category = $('#trigger-cat').text()

    // console.log(filters[filter])
    // console.log(searchText)
    // console.log(category)

    window.location.href = (`/search?category=${encodeURIComponent(category)}&text=${encodeURIComponent(searchText)}&filter=${filters[filter]}`)
});

// used to put an image placeholder when an image does not exist
$("img").on("error", function () {
    $(this).attr("src", "images/thumbnail-itemplaceholder.png");
});