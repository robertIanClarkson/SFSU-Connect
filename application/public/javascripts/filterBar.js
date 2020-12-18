// for referance
var filters = {
    1: 'price:high->low',
    2: 'price:low->high',
    3: 'date:old->new',
    4: 'date:new->old'
}

// Change the filter option for search results
$('#option').change(function() {
    var filter = $('#option').val()
    var searchText = $('#search-input').val()
    var category = $('#trigger-cat').text()
    window.location.href = (`/search?category=${encodeURIComponent(category)}&text=${encodeURIComponent(searchText)}&filter=${filters[filter]}`)
});
