// Home Route
Router.route('/', function () {
  this.render('login');
  //SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});
