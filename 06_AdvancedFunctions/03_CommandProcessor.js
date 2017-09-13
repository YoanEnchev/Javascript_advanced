let commands = ['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print'];

getCommands(commands);

function getCommands(commands) {
    let text = '';

    (function solveCommand(commands) {
        for (command of commands) {
            [operation, value] = command.split(' ');

            switch (operation) {
                case 'append':
                    text += "" + value;
                    break;
                case 'removeStart':
                    text = text.substring(value);
                    break;
                case 'removeEnd':
                    text = text.slice(0, -value);
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })(commands)
}
