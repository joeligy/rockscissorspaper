if (Meteor.isClient) {
  // This code only runs on the client
  Template.player2.helpers({
    status2: function () {
      var s2 = "";
      var r2 = Game.findOne({id: 2});
      if (r2) {
        s2 = "You played " + r2.text;
      } else {
        s2 = "You have not played";
      }
  
      var s1 = "Your opponent has already played";
      var r1 = Game.findOne({id: 1});
      if (! r1) {
        s1 = "Your opponent has not played yet";
      }
  
      var s3 = "Game in progress"
      if (r1 && r2) {
        console.log("checkResult");
        Meteor.call("checkResult", r2.text, r1.text);
        s3 = Session.get('res');
        console.log(s3);
      }
      return [
        {"text": s3},
        {"text": s2},
        {"text": s1},
      ];
    }
  });

  Template.player2.events({
    "submit .play2": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      var r2 = Game.findOne({id: 2});
      if (! r2) {
        if (["rock", "scissors", "paper"].indexOf(text) >= 0) {
          // Insert a task into the collection
          Game.insert({
            text: text,
            id: 2,
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
    "click .start2": function () {
      Meteor.call("clearGame");
      if (Session.keys.res) {
        Session.set('res', undefined);
        delete Session.keys.res;
      }
    }
  });
}
