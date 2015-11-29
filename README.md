# Rock Scissor Paper game in Meteor

## Details of operation

There are two templates, `player1.html` and `player2.html` that represent the current view of the game for both players through their helper functions, defined in `player1.js` and `player2.js`.

The play of each player is stored in a collection `Game`. Each helper function attempts to obtain the played value along with the value of the opponent. If both values are present, the outcome of the game is calculated using `checkOutcome` in `init.js`, which is defined as a Meteor method. The outcome is then propagated back to the corresponding helper function through a Session variable `res`, which is then propagated to the corresponding `html` template.

Once the game is finished, each player is able to start a new game by pressing the `New game` button. This clears the state of the previous game from the Session and `Game` collection.
