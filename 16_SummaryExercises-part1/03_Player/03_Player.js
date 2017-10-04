class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    get scoreCount() {
        return this.scores.length;
    }

    addScore(score) {
        if (score == Number(score)) {
            this.scores.push(score);
        }

        return this;
    }

    get highestScore() {
        if (this.scoreCount === 0) {
            return undefined;
        }

        return Math.max(...this.scores);
    }

    get topFiveScore() {
        let topScores = this.scores.sort((a, b) => b - a).slice(0, 5);;
        return topScores;
    }

    toString() {
        let descendingScores = this.scores.sort((a, b) => b - a);
        return `${this.nickName}: [${descendingScores.join(',')}]`;
    }
}
