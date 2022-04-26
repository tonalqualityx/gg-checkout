$(document).ready(function () {
  $(".international-toggle").click(function (e) {
    e.preventDefault();
    $("#state, #province, #zip, #postal-code").toggleClass("hide");

    // Invert the disabled & required settings
    $("#state select, #province select, #zip input, #postal-code input").prop(
      "disabled",
      function (i, v) {
        return !v;
      }
    );
    $("#state select, #province select, #zip input, #postal-code input").prop(
      "required",
      function (i, v) {
        return !v;
      }
    );

    $(".international-toggle").toggleClass("hide");
  });

  $(".checkboxes input[type=radio]").click(function () {
    // Just clear all the checkboxes & styling
    $(".checkboxes label").removeClass("checked");

    // Now add the class to the parent
    $(this).parent("label").addClass("checked");
  });
});
