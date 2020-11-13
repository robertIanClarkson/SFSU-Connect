/***********************DROPDOWN FOR VP**********************/
var category_icon = {
  'All': 'trip_origin',
  'Art': 'palette',
  'Books': 'book',
  'Clothes': 'checkroom',
  'Electronics': 'camera_alt',
  'Home & Kitchen': 'countertops',
  'Miscellaneous': 'pedal_bike',
  'Toys & Games': 'sports_esports',
  'Tutoring': 'face'
}

function changeCategory(newCategory) {
  currentCategory = newCategory
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text(category_icon[currentCategory])
}

$('#category-dropdown-trigger').dropdown();

$( document ).ready(function() {
  currentCategory = $('#trigger-cat').text()
  $('#trigger-icon').text(category_icon[currentCategory])
})

$('#all-cat').click(function () {
  changeCategory('All')
});

$('#art-cat').click(function () {
  changeCategory('Art')
});

$('#books-cat').click(function () {
  changeCategory('Books')
});

$('#clothes-cat').click(function () {
  changeCategory('Clothes')
});

$('#electronics-cat').click(function () {
  changeCategory('Electronics')
});

$('#home-cat').click(function () {
  changeCategory('Home & Kitchen')
});

$('#misc-cat').click(function () {
  changeCategory('Miscellaneous')
});
  

$('#toys-cat').click(function () {
  changeCategory('Toys & Games')
});

$('#tutoring-cat').click(function () {
  changeCategory('Tutoring')
});

$('#search-submit').click(function() {
  var searchText = $('#search-input').val();
  
  searchData = {
    category: currentCategory,
    text: searchText
  }

  window.location.href = (`/search?category=${encodeURIComponent(currentCategory)}&text=${encodeURIComponent(searchText)}`)
});
/***********************DROPDOWN FOR VP**********************/

/********************LANDING PAGE LATEST ITEM****************/
$("#itemCard").ready(function(){
  // code
  var itemsPerRow = 4;

  // $.post("landing", function(data, status){
  //   for(item of data){ // for all item in the data
  //     for(i=0; i<2; i++){  // 2 row
  //       for(j=0; j<itemsPerRow; j++){ // #'s of item for each row
  //           $("#itemCard").append('<div class="col s3"')
  //           $('#itemCard').append(`<div class="card-title"><p>${item.title}</p>`);
  //           $('#itemCard').append(`'<div class="card"><div class="card-image"><img class="responsive-img" src=images/items/${item.image}></div>`)
  //           $('#itemCard').append(`<div class="card-content"><p>${item.description}</p>`);
  //       }
  //     }
  //   }
  // });
});
/********************LANDING PAGE LATEST ITEM****************/