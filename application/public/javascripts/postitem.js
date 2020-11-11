var currentCategory = 'All'

$('#category-dropdown-trigger').dropdown();

$('#all-catpost').click(function() {
  currentCategory = 'All'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('trip_origin')
});

$('#art-catpost').click(function() {
  currentCategory = 'Art'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('palette')
});

$('#books-catpost').click(function() {
  currentCategory = 'Books'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('book')
});

$('#clothes-catpost').click(function() {
  currentCategory = 'Clothes'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('checkroom')
});

$('#electronics-catpost').click(function() {
  currentCategory = 'Electronics'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('camera_alt')
});

$('#home-catpost').click(function() {
  currentCategory = 'Home & Kitchen'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('countertops')
});

$('#misc-catpost').click(function() {
  currentCategory = 'Miscellaneous'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('pedal_bike')
});

$('#toys-catpost').click(function() {
  currentCategory = 'Toys & Games'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('sports_esports')
});

$('#tutoring-catpost').click(function() {
  currentCategory = 'Tutoring'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('face')
});
