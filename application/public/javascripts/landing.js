var filters = {
    1: 'price:high->low',
    2: 'price:low->high',
    3: 'date:old->new',
    4: 'date:new->old'
}


$('#submitButton').click(function() {
    var filter = $('#option').val()
    var searchText = $('#search-input').val()
    var category = $('#trigger-cat').text()

    // console.log(filters[filter])
    // console.log(searchText)
    // console.log(category)

    window.location.href = (`/search?category=${encodeURIComponent(category)}&text=${encodeURIComponent(searchText)}&filter=${filters[filter]}`)
});
