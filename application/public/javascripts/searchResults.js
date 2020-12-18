// used to put an image placeholder when an image does not exist
$("img").on("error", function () {
  $(this).attr("src", "images/thumbnail-itemplaceholder.png");
});