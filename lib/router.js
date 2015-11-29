if (Meteor.isClient) {
  Meteor.subscribe('player1');
}


Router.route('/player1', function () {
  this.render("player1");
});

Router.route('/player2', function () {
  this.render("player2");
});
