$("img").on("error", function () {
  $(this).attr("src", "../images/itemplaceholder.png");
});