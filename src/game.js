class Game {
    constructor() {
        this.board = new Board()
        this.turnQueue = [new Player(1), new Player(2)];
        this.dices = [new Dice(1), new Dice(2)];
    }

    // checkWin(){}
    // getWinner(){}
    getCurrentPlayerNumber() {
        return this.turnQueue[0].playerNum
    }

    getCurrentPlayer() {
        return this.turnQueue[0]
    }

    getCurrentDice() {
       return this.dices[0];
    }

    getCurrentSection() {
        if (this.getCurrentPlayerNumber() === 1) {
            return this.board.playerSection1
        } else { return this.board.playerSection2 }
    }

    switchPlayer() {
        this.turnQueue = [this.turnQueue[1], this.turnQueue[0]]
        this.dices = [this.dices[1], this.dices[0]]
    }

}