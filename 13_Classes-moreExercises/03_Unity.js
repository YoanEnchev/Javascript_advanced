class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(newMember) {
        if (newMember instanceof Rat) {
            this.unitedRats.push(newMember);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = this.name;

        for (let rat of this.unitedRats) {
            result += '\n' + '##' + rat.name;
        }

        return result;
    }
}