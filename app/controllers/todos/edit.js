import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      editTodo: function(id){
        let self = this;

        let date = this.get('model.date');
        let title = this.get('model.title');
        let body = this.get('model.body');

        this.store.findRecord('todo', id).then(function(todo){
          todo.set('date', new Date(date));
          todo.set('title', title);
          todo.set('body', body);

          todo.save();

          self.transitionToRoute('todos');
        });
      },
      deleteTodo: function(id){
        let self = this;

        this.store.findRecord('todo', id).then(function(todo){
          todo.deleteRecord();
          todo.save();
          self.transitionToRoute('todos');
      });
    }
  }
});
