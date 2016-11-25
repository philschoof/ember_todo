import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addTodo: function(){
      let date = this.get('date');
      let title = this.get('title');
      let body = this.get('body');

      //Create new todo
      let newTodo = this.store.createRecord('todo', {
        title: title,
        body: body,
        date: new Date(date)
      });

      //Save to DB
      newTodo.save();

      //Clear
      this.setProperties({
        title: '',
        body: '',
        date: ''
      });
    }
  }
});
