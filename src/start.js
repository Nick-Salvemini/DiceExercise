let game = new Game();

function rollPlayer(player, dice, playerSection) {
    dice.disableEnable()
    dice.rollDice();

    setTimeout(() => {
        game.board.hover(playerSection, dice.getValue());
        playerSection.forEach((arr) => {
            let col = arr[0]

            $(col).on('click', () => {
                player.play(dice.getValue(), arr);

                // *****************************************************
                // let row = player.play(dice.getValue(), arr);
                // console.log(row)
                // row KEEPS RETURNING UNDEFINED
                // game.board.updateScore(dice.getValue(), row, col[4])
                // *****************************************************


                dice.toggleDice();
                game.board.removeHover();
                // game.checkWin();

                $(document).off('click', `#roll${game.getCurrentPlayerNumber()}`);
                game.switchPlayer();

                if (game.getCurrentPlayer().isHuman) {
                    game.dices[1].disableEnable();
                    $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
                        rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                    });
                } else {
                    game.getCurrentDice().rollDice();

                    setTimeout(() => {
                        game.getCurrentPlayer().play(game.getCurrentDice().getValue(), game.getCurrentSection());
                        game.getCurrentDice().rollDice();
                        game.switchPlayer();
                        game.getCurrentDice().disableEnable();
                        $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
                            rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                        })
                    }, 1300);
                }
            })
        });
    }, 1102)
};

$(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
    rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
})