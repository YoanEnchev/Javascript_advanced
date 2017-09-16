getAndPrintData("Peter", 29, 75, 182);

function getAndPrintData(name, age, weight, height) {
    let bmi = weight / (height * height) * 10000;
    let status = '';

    if (bmi < 18.5) {
        status = 'underweight';
    }

    else if (bmi < 25) {
        status = 'normal';
    }

    else if (bmi < 30) {
        status = 'overweight';
    }

    else if (bmi >= 30) {
        status = 'obese';
    }

    let personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    let data = {
        name: name,
        BMI: Math.round(bmi),
        personalInfo: personalInfo,
        status: status
    };

    if (status === 'obese') {
        data.recommendation = 'admission required';
    }

    return data;
}
