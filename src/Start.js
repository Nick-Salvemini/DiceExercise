let game = new Game();


$(`#rollDice`).on('click', function(){
    // Player 1 plays
    game.dice1.rollDice();
    game.player1.play();

    // Robot plays
    game.dice2.rollDice();
    game.player2.computerPlay();

    // check winning conditions
    if(game.checkWin()) {
        alert("Winner is: ", game.getWinner());
        // reload
    }
});

$('#area').on('mouseenter', function () {
    if(game.getCurrentPlayer() == p1){
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