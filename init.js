Game = new Mongo.Collection("game");

Meteor.methods({
  clearGame: function () {
    Game.remove({id: 1});
    Game.remove({id: 2});
  },
  checkResult: function (resmn, resop) {
    if (Meteor.isClient) {
      var res = "";
      var outcomes = ["You won", "You lost", "It was a draw"];
      console.log(resmn + ' ' + resop);
      if (resmn == resop) {
         res = outcomes[2];
      } else if (resmn == "scissors") {
        if (resop == "rock") {
          res = outcomes[1];
        } else {
          res = outcomes[0];
        }
      } else if (resmn == "rock" ) {
        if (resop == "paper") {
          res = outcomes[1];
        } else {
          res = outcomes[0];
        }
      } else {
        if (resop == "scissors") {
          res = outcomes[1];
        } else {
          res = outcomes[0];
        }
      }
      console.log(res);
      Session.set('res', res);
    }
  }
});
