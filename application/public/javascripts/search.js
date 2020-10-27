/***********************DROPDOWN FOR VP**********************/
var currentCategory = 'All'

$('#category-dropdown-trigger').dropdown();

$('#all-cat').click(function() {
  currentCategory = 'All'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('trip_origin')
});

$('#art-cat').click(function() {
  currentCategory = 'Art'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('palette')
});

$('#books-cat').click(function() {
  currentCategory = 'Books'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('book')
});

$('#clothes-cat').click(function() {
  currentCategory = 'Clothes'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('checkroom')
});

$('#electronics-cat').click(function() {
  currentCategory = 'Electronics'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('camera_alt')
});

$('#home-cat').click(function() {
  currentCategory = 'Home & Kitchen'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('countertops')
});

$('#misc-cat').click(function() {
  currentCategory = 'Miscellaneous'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('pedal_bike')
});

$('#toys-cat').click(function() {
  currentCategory = 'Toys & Games'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('sports_esports')
});

$('#tutoring-cat').click(function() {
  currentCategory = 'Tutoring'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('face')
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
      $('#search-results').append(`<img class="responsive-img" src=images/items/${item.image}>`)
      $('#search-results').append(`<p>NAME: ${item.name}</p>`)
      $('#search-results').append(`<p>DESCRIPTION: ${item.description}</p>`)
      $('#search-results').append(`<p>PRICE: $${item.price}</p>`)
      $('#search-results').append(`<div class='divider'></div>`)
    }
  });
});
/***********************DROPDOWN FOR VP**********************/