var currentCategoryNewItem = 'All'

$('#category-dropdown-trigger-newItem').dropdown();

$('#all-catpost-newItem').click(function() {
  currentCategoryNewItem = 'All'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('trip_origin')
});

$('#art-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Art'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('palette')
});

$('#books-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Books'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('book')
});

$('#clothes-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Clothes'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('checkroom')
});

$('#electronics-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Electronics'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('camera_alt')
});

$('#home-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Home & Kitchen'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('countertops')
});

$('#misc-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Miscellaneous'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('pedal_bike')
});

$('#toys-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Toys & Games'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('sports_esports')
});

$('#tutoring-catpost-newItem').click(function() {
  currentCategoryNewItem = 'Tutoring'
  $('#trigger-cat-newItem').text(currentCategoryNewItem)
  $('#trigger-icon-newItem').text('face')
});
