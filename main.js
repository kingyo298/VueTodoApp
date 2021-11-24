var app = new Vue({
  el: "#app",
  data(){
    return {
      todos : [],
      text:"",
      isDisabled : true
    }
  },
  methods : {
    addTodoItem: function(){
      this.todos.push(this.text);
      this.text = "";
    },
    deleteTodoItem: function(index){
      this.todos.splice(index,1);
    },
    
  }
});
