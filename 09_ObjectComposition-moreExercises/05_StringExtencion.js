let str = 'the quick brown fox jumps over the lazy dog';

(function extendStringProps() {

    String.prototype.ensureStart = function (start_newStr) {
        let start_oldStr = this.substr(0, start_newStr.length);

        if (start_oldStr !== start_newStr) {
            return start_newStr + this.toString();
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (end_newStr) {
        let end_oldStr = this.substr(this.length - end_newStr.length, this.length);

        if (end_oldStr !== end_newStr) {
            return this.toString() + end_newStr;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this.toString() === "") {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return this.toString();
        }

        else {
            let tokens = this.split(' ').filter(e => e != "");

            if (tokens.length === 1) { //no space occurance
                if (n >= 4) {
                    return this.substr(0, n - 3) + "..."; //
                }

                else {
                    let dots = "";

                    for (let i = 0; i < n; i++) {
                        dots += '.';
                    }

                    return dots;
                }
            }

            else {
                let lengthOfString = getLength(tokens);

                do {
                    lengthOfString = getLength(tokens);
                    tokens.pop();
                }
                while (lengthOfString > n + 3);

                tokens[tokens.length - 1] += "...";

                return tokens.join(' ');

                function getLength(tokens) {
                    let sum = 0;

                    for (let i = 0; i < tokens.length; i++) {
                        sum += tokens[i].length;
                    }

                    return sum;
                }
            }
        }
    }

    String.format = function () {
        let text = arguments[0];

        for (let i = 1; i < arguments.length; i++) {
            text = text.replace('{' + `${i - 1}` + '}', arguments[i]);
        }

        return text;
    }
})()

str = str.truncate(6);
console.log(str);


