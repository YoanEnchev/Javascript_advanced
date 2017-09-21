let worker = {
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
};

modifyIfNeeded(worker);

function modifyIfNeeded(worker) {
    if (worker.handsShaking === true) {
        let kilograms = worker.weight;
        let yearExperience = worker.experience;

        worker.bloodAlcoholLevel += kilograms / 10 * yearExperience;
        worker.handsShaking = false;
    }

    return worker;
}
