let input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];

(function getProcessor() {

    let processor = (function () {
        let list = [];

        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list.filter(e => e !== 'item'),
            print: () => console.log(list.join(','))
        }
    })();

    for (commandAndValue of input) {
        [command, value] = commandAndValue.split(' ');
        processor[command](value);
    }

})();