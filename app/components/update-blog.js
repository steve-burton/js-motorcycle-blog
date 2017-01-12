import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        credit: this.get('credit'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
