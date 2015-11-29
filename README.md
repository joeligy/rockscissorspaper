## Details of operation

The app consists of two templates, `player1.html` and `player2.html`, which represent the current view of the game for both players through their helper functions, defined in `player1.js` and `player2.js`.

The play of each player (once its available) is stored in a collection `Game`. Each helper function attempts to obtain the choices of both players and report game status to the corresponding template. If both players' choices are present, the outcome of the game is calculated using `checkOutcome` in `init.js`, which is defined as a Meteor method. The outcome is then propagated back to the corresponding helper function through a Session variable `res`, which is then further propagated to the corresponding `html` template.

Once the game is finished, each player is able to start a new game by pressing the `New game` button. This clears the state of the previous game both from the Session and `Game` collection. The players can continue playing the game however many times they wish.
