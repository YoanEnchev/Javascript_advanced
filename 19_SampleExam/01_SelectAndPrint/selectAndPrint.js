//Points: 100/100
function move(command) {
    switch (command) {
        case 'right':
            $('#available-towns option:selected').appendTo('#selected-towns');
            break;

        case 'left':
            $('#selected-towns option:selected').appendTo('#available-towns');
            break;

        case 'print':
            let texts =[];
            $('#selected-towns option').each((index, obj) => texts.push($(obj).text()));
            $('div#output').text(texts.join('; '));
            break;
    }
}
