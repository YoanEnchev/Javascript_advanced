let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

executeCommand.call(post, 'upvote');

function executeCommand(command) {
    switch (command) {
        case 'upvote':
            this.upvotes++;
            break;

        case 'downvote':
            this.downvote++;
            break;

        case 'post':
            let reportedUpvote = this.upvote;
            let reportedDownVote = this.downvote;

            if (reportedUpvote + reportedDownVote >= 50) {
                let addition = Math.max(reportedUpvote, reportedDownVote);
                let reportedUpvote = Math.ceil(this.upvote + 1 / 4 * addition);
                let reportedDownVote = Math.ceil(this.downvote + 1 / 4 * addition);
            }

            let balance = reportedUpvote - reportedDownVote;
            let totalVotes = reportedUpvote + reportedDownVote;

            let rating = '';

            if (this.upvotes > 2 / 3 * totalVotes) {
                rating = 'hot';
            }

            else if (balance > 0) {
                rating = 'controversial';
            }

            else {
                rating = 'unpopular';
            }

            if (totalVotes < 10) {
                rating = 'new';
            }

            return [reportedUpvote, reportedDownVote, balance, rating];
    }
}
