/***********************DROPDOWN FOR VP**********************/
var currentCategory = 'All'

$('#category-dropdown-trigger').dropdown();

$('#art-cat').click(function() {
  currentCategory = 'Art'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#books-cat').click(function() {
  currentCategory = 'Books'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#clothes-cat').click(function() {
  currentCategory = 'Clothes'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#electronics-cat').click(function() {
  currentCategory = 'Electronics'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#home-cat').click(function() {
  currentCategory = 'Home & Kitchen'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#misc-cat').click(function() {
  currentCategory = 'Miscellaneous'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#toys-cat').click(function() {
  currentCategory = 'Toys & Games'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#tutoring-cat').click(function() {
  currentCategory = 'Tutoring'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#search-submit').click(function() {
  var searchText = $('#search-input').val();

  console.log(`Category: ${currentCategory}`)
  console.log(`Text    : ${searchText}`)

  searchData = {
    category: currentCategory,
    text: searchText
  }

  $.post( "search", searchData, function( data, status ) {
    for(item of data){
      console.log(item)
      $('#search-results').append(`<p>${item.name} : ${item.message}</p>`)
    }
  });
});
/***********************DROPDOWN FOR VP**********************/