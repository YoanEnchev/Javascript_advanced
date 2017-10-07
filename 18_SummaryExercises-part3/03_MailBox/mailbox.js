class MailBox {
    constructor() {
        this.messages = [];
    }

    addMessage(subject, text) {
        let message = {subject, text};
        this.messages.push(message);
        return this;
    }

    get messageCount() {
        return this.messages.length;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(substr) {
        let allMessages = this.messages.slice();
        return allMessages.filter(msg => msg.subject.includes(substr));
    }

    toString() {
        if(this.messageCount === 0) {
            return' * (empty mailbox)';
        }
        else {
          let result = this.messages.map(msg => ` * [${msg.subject}] ${msg.text}`);
          return result.join('\n');
        }
    }
}
