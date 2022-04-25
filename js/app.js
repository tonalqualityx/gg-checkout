$(document).ready(function () {
  $(".international-toggle").click(function (e) {
    e.preventDefault();
    $("#international-address").toggleClass("hide");
    $(".international-toggle").toggleClass("hide");
  });
});
