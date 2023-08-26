class Game {
    constructor() {
        this.board = new Board()
        this.player1 = new Player(1);
        this.player2 = new Player(2);
        this.dice1 = new Dice();
        this.dice2 = new Dice();
    }
}