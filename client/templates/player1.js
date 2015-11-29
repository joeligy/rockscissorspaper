if (Meteor.isClient) {
  Template.player1.helpers({
    status1: function () {
      var s1 = "";
      var r1 = Game.findOne({id: 1});
      if (r1) {
        s1 = "You played " + r1.text;
      } else {
        s1 = "You have not played";
      }

      var s2 = "Your opponent has already played";
      var r2 = Game.findOne({id: 2});
      if (! r2) {
        s2 = "Your opponent has not played yet";
      }

      var s3 = "Game in progress"
      if (r1 && r2) {
        console.log("checkResult");
        Meteor.call("checkResult", r1.text, r2.text);
        s3 = Session.get('res');
        console.log(s3);
      }
      return [
        {"text": s3},
        {"text": s1},
        {"text": s2},
      ];
    }
  });

  Template.player1.events({
    "submit .play1": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
      var r1 = Game.findOne({id: 1});
      if (! r1) {
        if (["rock", "scissors", "paper"].indexOf(text) >= 0) {
          Game.insert({
            text: text,
            id: 1,
          });
          // Clear form
          event.target.text.value = "";
        } else {
          event.target.text.value = "Enter a valid play";
        }
      } else {
        event.target.text.value = "You have already played in this round";
      }
    },
    "click .start1": function () {
      Meteor.call("clearGame");
      if (Session.keys.res) {
        delete Session.keys.res;
      }
    }
  });
}
