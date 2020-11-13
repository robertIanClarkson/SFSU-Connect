/***********************DROPDOWN FOR VP**********************/
var currentCategory = 'All'

$('#category-dropdown-trigger').dropdown();



$('#all-cat').click(function () {
  all();
});
all = function() {
  currentCategory = 'All'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('trip_origin')
}

$('#art-cat').click(function () {
  art();
});
art = function() {
  currentCategory = 'Art'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('palette')
}

$('#books-cat').click(function () {
  books();
});
books = function() {
  currentCategory = 'Books'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('book')
}

$('#clothes-cat').click(function () {
  clothes()
});
clothes = function() {
  currentCategory = 'Clothes'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('checkroom')
}

$('#electronics-cat').click(function () {
  elec();
});
elec = function() {
  currentCategory = 'Electronics'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('camera_alt')
}

$('#home-cat').click(function () {
  home();
});
home = function() {
  currentCategory = 'Home & Kitchen'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('countertops')
}

$('#misc-cat').click(function () {
  misc();
});
misc = function() {
  currentCategory = 'Miscellaneous'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('pedal_bike')
}

$('#toys-cat').click(function () {
  toys();
});
toys = function() {
  currentCategory = 'Toys & Games'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('sports_esports')
}

$('#tutoring-cat').click(function () {
  toys();
});
tutoring = function() {
  currentCategory = 'Tutoring'
  $('#trigger-cat').text(currentCategory)
  $('#trigger-icon').text('face')
}

$('#search-submit').click(function() {
  var searchText = $('#search-input').val();
  
  searchData = {
    category: currentCategory,
    text: searchText
  }
  /*
  $.get('/search', searchData)
      .done((result) => {
        document.write(result);
      })
*/

  $.post( "search", searchData)
  .done((result) => {
    document.write(result);
    document.close();
    console.log(document.cookie)
  });
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