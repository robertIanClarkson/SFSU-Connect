//For the category dropdown 
$(document).ready(function(){
  $('select').formSelect();
});

//Use to display image upon uploading one. 
function display(input){
  if (input.files && input.files[0]) {
    document.getElementById('holderpic').hidden = true;
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#itemImg')
        .attr('src', e.target.result)
        .width(500)
        .height(400);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
