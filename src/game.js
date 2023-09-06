class Game {
    constructor() {
        this.board = new Board()
        this.player1 = new Player(1);
        this.player2 = new Player(2, false);
        this.dice1 = new Dice(1);
        this.dice2 = new Dice(2);
        this.turnQueue = [this.player1, this.player2];
    }

    // checkWin(){}
    // getWinner(){}
    getCurrentPlayer() {
        let currentPlayer = this.turnQueue[0].playerNum
        return currentPlayer
    }

    switchPlayer() {
        this.turnQueue = [this.turnQueue[1], this.turnQueue[0]]
    }

}