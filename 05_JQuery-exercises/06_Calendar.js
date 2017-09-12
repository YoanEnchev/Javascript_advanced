function calendar([day, month, year]) {

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let inputDate = new Date(year, month - 1, day);

    let calednarTable = $('<table>')
        .append(`<caption>${monthNames[month - 1]} ${year}</caption>`);

    let daysOfWeek = $($('<tr>')
        .append('<th>Mon</th>')
        .append('<th>Tue</th>')
        .append('<th>Wed</th>')
        .append('<th>Thu</th>')
        .append('<th>Fri</th>')
        .append('<th>Sat</th>')
        .append('<th>Sun</th>'));

    calednarTable.append(daysOfWeek);
    $('#content').append(calednarTable);

    //let filledColumns = 1;
    let dayOfWeek_firstDay = new Date(year, month - 1, 1).getDay();// 0 for sunday, 2 for tuesday and so on...
    let daysInMonth = new Date(year, month, 0).getDate();

    if (dayOfWeek_firstDay === 0) {
        dayOfWeek_firstDay = 7;
    }

    let prevDays_count = dayOfWeek_firstDay - 1;

    let totalColumns = daysInMonth + prevDays_count;

    while (totalColumns % 7 !== 0) {
        totalColumns++;
    }

    let tableRow = $('<tr>');

    for (let sector = 1; sector <= totalColumns; sector++) {
        let currentDay = sector - prevDays_count;

        if (currentDay <= daysInMonth && currentDay > 0) {

            if (currentDay === day) { //today
                tableRow.append(`<td class="today">${currentDay}</td>`);
            }

            else {
                tableRow.append(`<td>${currentDay}</td>`);
            }
        }

        else {
            tableRow.append('<td></td>');
        }

        if (sector % 7 === 0) {
            calednarTable.append(tableRow);
            tableRow = $('<tr>');
        }
    }
}
