processTickets();

let [ticketsData, criteria] =
    [['Philadelphia|94.20|available',
        'New York City|195.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'price']

function processTickets(ticketsData, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    let allTickets = [];

    for (currentTicket of ticketsData) {
        let tokens = currentTicket.split('|');
        let city = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(city, price, status);
        allTickets.push(ticket);
    }

    switch (criteria) {
        case 'status' || 'destination':
            allTickets = allTickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
            break;
        case 'destination':
            allTickets = allTickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
            break;
        case 'price':
            allTickets = allTickets.sort((a, b) => a[criteria] - b[criteria]);
            break;
    }

    return allTickets;
}