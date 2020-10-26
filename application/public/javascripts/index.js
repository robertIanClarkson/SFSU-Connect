/***********************DROPDOWN FOR VP**********************/
var currentCategory = 'All'

$('#category-dropdown-trigger').dropdown();

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
      $('#search-results').append(`<p>${item.name} : ${item.message}</p>`)
    }
  });
});
/***********************DROPDOWN FOR VP**********************/