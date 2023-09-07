class Game {
    constructor() {
        this.board = new Board()
        this.player1 = new Player(1);
        this.player2 = new Player(2);
        this.dice1 = new Dice(1);
        this.dice2 = new Dice(2);
        this.turnQueue = [this.player1, this.player2];
    }

    // checkWin(){}
    // getWinner(){}
    getCurrentPlayerNumber() {
        let currentPlayer = this.turnQueue[0].playerNum
        return currentPlayer
    }

    getCurrentPlayer() {
        let currentPlayer = this.turnQueue[0]
        return currentPlayer
    }

    getCurrentDice() {
        if (this.getCurrentPlayerNumber() === 1) {
            return this.dice1
        } else { return this.dice2 }
    }

    getCurrentSection() {
        if (this.getCurrentPlayerNumber() === 1) {
            return this.board.playerSection1
        } else { return this.board.playerSection2 }
    }

    switchPlayer() {
        this.turnQueue = [this.turnQueue[1], this.turnQueue[0]]
    }

}