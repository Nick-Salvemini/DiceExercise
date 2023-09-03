class Game {
    constructor() {
        this.board = new Board()
        this.player1 = new Player(1);
        this.player2 = new Player(2, false);
        this.dice1 = new Dice();
        this.dice2 = new Dice();
        this.turnQueue = [this.player1, this.player2];
    }
}