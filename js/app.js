$(document).ready(function () {
  $(".international-toggle").click(function (e) {
    e.preventDefault();
    $("#international-address").toggleClass("hide");
    $(".international-toggle").toggleClass("hide");
  });

  $(".checkboxes input[type=radio]").click(function () {
    // Just clear all the checkboxes & styling
    $(".checkboxes label").removeClass("checked");

    // Now add the class to the parent
    $(this).parent("label").addClass("checked");
  });
});
