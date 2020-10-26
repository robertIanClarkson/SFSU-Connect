/***********************DROPDOWN FOR VP**********************/
var currentCategory = 'all'

$('#category-dropdown-trigger').dropdown();

$('#art-cat').click(function() {
  currentCategory = 'art'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#books-cat').click(function() {
  currentCategory = 'books'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#clothes-cat').click(function() {
  currentCategory = 'clothes'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#electronics-cat').click(function() {
  currentCategory = 'electronics'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#home-cat').click(function() {
  currentCategory = 'home'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#misc-cat').click(function() {
  currentCategory = 'misc'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#toys-cat').click(function() {
  currentCategory = 'toys'
  $('#category-dropdown-trigger').text(currentCategory)
});

$('#tutoring-cat').click(function() {
  currentCategory = 'tutoring'
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
    console.log(`Search data successfully sent --> (${status}:${data})`)
  });
});
/***********************DROPDOWN FOR VP**********************/