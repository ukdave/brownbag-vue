$(function() {
  $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data) {
    for (var i = 0; i < 10; i++) {
      var item = data[i];
      $("#todo-template").
        clone().
        removeAttr("id").
        find(".title").text(item.title).end().
        find(".completed").attr("checked", item.completed).end().
        appendTo("#app").
        show();
    };
  });
});
