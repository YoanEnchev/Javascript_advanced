let input = ['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'];

solve(input);

function solve(input) {
    let nameAndObjects = new Map();

    for (instruction of input) {
        let tokens = instruction.split(' ');

        if (tokens[0] === 'create' && tokens.length === 2) {
            nameAndObjects.set(tokens[1], {}); //name and empty object
        }

        else if (tokens[0] === 'create' && tokens.length === 4) {
            let parent = nameAndObjects.get(tokens[3]);
            nameAndObjects.set(tokens[1], Object.create(parent));
        }

        else if (tokens[0] === 'set') {
            let name = tokens[1];
            let prop = tokens[2];
            let value = tokens[3];

            let objectToChange = nameAndObjects.get(name);
            Object.getPrototypeOf(objectToChange)[prop] = value;
        }

        else if (tokens[0] === 'print') {
            let printObject = Object.getPrototypeOf(nameAndObjects.get(tokens[1]));
            let result = [];

            for (prop in printObject) {
                result.push(`${prop}:${printObject[prop]}`);
            }

            console.log(result.join(', '));
        }
    }
}

