class Game {
    constructor() {
        this.board = new Board()
        this.turnQueue = [new Player(1), new Player(2, false)];
        this.dices = [new Dice(1), new Dice(2)];
    }

    // checkWin() {
    //     const c1 = playerSection[0][0]
    //     const c1r1 = playerSection[0][1]
    //     const c1r2 = playerSection[0][2]
    //     const c1r3 = playerSection[0][3]

    //     const c2 = playerSection[1][0]
    //     const c2r1 = playerSection[1][1]
    //     const c2r2 = playerSection[1][2]
    //     const c2r3 = playerSection[1][3]

    //     const c3 = playerSection[2][0]
    //     const c3r1 = playerSection[2][1]
    //     const c3r2 = playerSection[2][2]
    //     const c3r3 = playerSection[2][3]
    // }

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