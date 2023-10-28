let game = new Game();

function rollPlayer(player, dice, playerSection) {
    dice.disableEnable()
    dice.rollDice();

    setTimeout(() => {
        game.board.hover(playerSection, dice.getValue());
        playerSection.forEach((arr) => {
            let col = arr[0]

            $(col).on('click', () => {
                let row = player.play(dice.getValue(), arr);

                let scoreArray = game.board.updateColTotals(game.getCurrentPlayerNumber(), dice.getValue(), parseInt(col[4]), row)

                $(`#p${game.getCurrentPlayerNumber()}c1Total`).text(scoreArray[0]);
                $(`#p${game.getCurrentPlayerNumber()}c2Total`).text(scoreArray[1]);
                $(`#p${game.getCurrentPlayerNumber()}c3Total`).text(scoreArray[2]);

                game.board.updateScore(game.getCurrentPlayerNumber());

                dice.toggleDice();
                game.board.removeHover();

                if (game.checkFilledBoard(game.getCurrentPlayerNumber())) {
                    game.getWinner(game.getCurrentPlayerNumber())
                }

                $(document).off('click', `#roll${game.getCurrentPlayerNumber()}`);
                game.switchPlayer();

                if (game.getCurrentPlayer().isHuman) {
                    game.dices[1].disableEnable();
                    $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
                        rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection());

                    });
                } else {
                    game.getCurrentDice().rollDice();

                    setTimeout(() => {
                        let cpu = game.getCurrentPlayer().play(game.getCurrentDice().getValue(), game.getCurrentSection());
                        game.getCurrentDice().rollDice();

                        let scoreArray = game.board.updateColTotals(game.getCurrentPlayerNumber(), game.getCurrentDice().getValue(), cpu[0], cpu[1]);

                        $(`#p${game.getCurrentPlayerNumber()}c1Total`).text(scoreArray[0]);
                        $(`#p${game.getCurrentPlayerNumber()}c2Total`).text(scoreArray[1]);
                        $(`#p${game.getCurrentPlayerNumber()}c3Total`).text(scoreArray[2]);

                        game.board.updateScore(game.getCurrentPlayerNumber());

                        if (game.checkFilledBoard(game.getCurrentPlayerNumber())) {
                            game.getWinner(game.getCurrentPlayerNumber())
                        }

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