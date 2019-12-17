new Vue({
  el: "#app",
  data: {
    items: []
  },
  mounted: function() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => this.items = json.slice(0, 10))
  }
})
