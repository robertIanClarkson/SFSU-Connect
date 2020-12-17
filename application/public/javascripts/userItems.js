$("img").on("error", function () {
  $(this).attr("src", "../images/thumbnail-itemplaceholder.png");
});