$(function() {
  $("#user-name").on("keyup", function() {
    var name = $(this).val();
    if (name === "") {
      $("#user-greeting").text("");
    } else {
      $("#user-greeting").text("Hello " + name + "!");
    }
  });

  $("#toggle-btn").on("click", function() {
    $("#user-greeting").toggleClass("red");
  });
});
