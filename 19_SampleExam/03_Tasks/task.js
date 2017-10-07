//Points: 90/100

class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(deadline) {
        if (deadline < Date.now()) {
            throw Error();
        }

        this._deadline = deadline;
    }

    get isOverdue() {
        if (this.deadline < Date.now() && this.status !== "Complete") {
            return true;
        }
        return false;
    }

    static comparator(a, b) {
        if (a.isOverdue === true && b.isOverdue === false) {
            return -1;
        }
        else if (b.isOverdue === true && a.isOverdue === false) {
            return 1;
        }
        else {
            let statuses = ['Open', 'In Progress', 'Complete'];
            let a_statusIndex = statuses.indexOf(a.status);
            let b_statusIndex = statuses.indexOf(b.status);

            if (a_statusIndex > b_statusIndex) {
                return -1;
            }
            else if (a_statusIndex < b_statusIndex) {
                return 1;
            }
            else { //equal
                return 0;
            }
        }
    }

    toString() {
        let statusAndIcon = {
            "Open": "\u2731", //✱
            "In Progress": "\u219D", //↝
            "Complete": "\u2714" //✔
        };

        let statusIcon = statusAndIcon[this.status];

        if(this.status === "Complete") {
            return `[${statusIcon}] ${this.title}`;
        }

       else if (this.isOverdue === true) {
            statusIcon = "\u26A0"; //⚠
            return `[${statusIcon}] ${this.title} (overdue)`;
        }

        return `[${statusIcon}] ${this.title} {(deadline: ${this.deadline})}`
    }
}
