let output = result(42, 'cat', 15, 'kitten', 'tomcat');

function result() {
    let typeAndCount = new Map();

    for (arg of arguments) {
        let type = typeof (arg);

        console.log(`${type}: ${arg}`);

        if (!typeAndCount.has(type)) {
            typeAndCount.set(type, 0);
        }

        let oldValue = typeAndCount.get(type);
        typeAndCount.set(type, oldValue + 1);
    }

    let sorted = Array.from(typeAndCount)
        .sort((a, b) => b[1] - a[1]);

    for ([type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
}