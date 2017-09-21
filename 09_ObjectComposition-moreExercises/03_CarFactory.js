let requiredCar = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

carParameters(requiredCar);

function carParameters(requiredCar) {
    let model = requiredCar.model
    let power = requiredCar.power;
    let type = requiredCar.carriage;
    let color = requiredCar.color;
    let wheelsize = requiredCar.wheelsize;

    let volume;

    if (power <= 90) {
        volume = 1800;
        power = 90;
    }

    else if (power <= 120) {
        volume = 2400;
        power = 120;
    }

    else if (power <= 200) {
        volume = 3500;
        power = 200;
    }

    let engine = { power, volume };

    let carriage = { type, color };

    wheelsize = Math.trunc(wheelsize);

    if (wheelsize % 2 === 0) {
        wheelsize--;
    }

    let wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    let car = { model, engine, carriage, wheels }

    return car;
}
