function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let title = `Post: ${this.title}`;
            let content = `Content: ${this.content}`;
            return title + '\n' + content;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let titleAndContens = super.toString();
            let rating = '\n' + `Rating: ${this.likes - this.dislikes}`;

            if (this.comments.length === 0) {
                return titleAndContens + rating;
            }

            let textOfComments = '\n' + "Commens:" + '\n' + this.comments.map(c => ` * ${c}`).join('\n');
            let result = titleAndContens + rating + textOfComments;

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + "\n" + `Views: ${this.views}`
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}