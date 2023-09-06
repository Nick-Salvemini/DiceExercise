let game = new Game();

// console.log(game.board.playerSection1)
// console.log(game.board.playerSection2)
console.log(game.turnQueue)

$(`#roll1`).on('click', function () {
    // Player 1 plays
    game.dice1.rollDice();

    // setTimeout(() => {
    //     console.log(game.dice1.diceValue)
    // }, 3000)

    setTimeout(() => {
        game.board.hover(game.getCurrentPlayer(), game.dice1.getValue())
        game.player1.play(game.dice1.getValue(), game.board.playerSection1);
    }, 1102)



    // Robot plays
    // game.dice2.rollDice();
    // game.player2.play();

    // check winning conditions
    // if (game.checkWin()) {
    //     alert("Winner is: ", game.getWinner());
    //     // reload
    // }

    // console.log(game.dice1, game.player1, game.dice2, game.player2)
});

$('#area').on('mouseenter', function () {
    if (game.getCurrentPlayer() == p1) {
        //
    }



    // if ($(r1).hasClass('filled') == false) {
    //     $(col).addClass('hover');
    //     if ($(r3).hasClass('filled') == false) {
    //         $(r3).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`)
    //     } else if ($(r2).hasClass('filled') == false) {
    //         $(r2).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`)
    //     } else { $(r1).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`) }
    // }
})