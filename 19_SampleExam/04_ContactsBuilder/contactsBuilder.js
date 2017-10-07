//Points: 91/100
//Total for the exam: 373/400 => 5.73/6.00

class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(changedStatus) {
        let searchFor = `${this.firstName}${this.lastName}`;

        if(changedStatus) { //online
            $("div.title:contains(" + searchFor + ")").addClass('online');
        }
        else { //offline
            $("div.title:contains(" + searchFor + ")").removeClass('online');
        }

        this._online = changedStatus;
    }

    render(id) {
        //create elements
        let article = $('<article>');
        let title = $('<div>')
            .addClass('title')
            .text(`${this.firstName} ${this.lastName}`);
        let button = $('<button>')
            .html(`&#8505;`)
            .click(showOrHide);

        let info = $('<div>')
            .addClass('info')
            .css('display', 'none');
        let phone = $('<span>').html(`&phone;${this.phone}`);
        let email = $('<span>').html(`&#9993;${this.email}`);

        //appending elements
        title.append(button);
        article.append(title);

        info.append(phone).append(email);
        article.append(info);
        $(`#${id}`).append(article);

        function showOrHide() {
            let element = $(this).parent().parent().find('div.info');

            if(element.css('display') === 'none') {
                element.css('display', 'block');
            }
            else {
                element.css('display', 'none');
            }
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
