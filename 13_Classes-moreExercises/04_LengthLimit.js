class Stringer {
    constructor(string, length) {
        this.innerString  = string;
        this.innerLength = length;
    }

    increase(index) {
        this.innerLength += index;
    }

    decrease(index) {
        this.innerLength -= index;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let initialString = this.innerString;
        let currentLength = this.innerLength

        if (initialString.length > currentLength) {
            return initialString.substring(0, currentLength) + "...";
        }

        else {
            return this.innerString;
        }
    }
}