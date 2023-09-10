class GuessingGame {
    constructor() {
        this.selector = null;
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.selector = Math.ceil((this.min + this.max) / 2);
        return this.selector;
    }

    lower() {
        this.max =  this.selector;
    }

    greater() {
        this.min = this.selector;
    }
}

module.exports = GuessingGame;
