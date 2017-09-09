function attachEventsListeners() {
    let button = document.getElementById('convert');

    button.addEventListener('click', getUnitsAndCalculate);

    function getUnitsAndCalculate() {
        let selectedIndex_from = document.getElementById("inputUnits").selectedIndex;
        let selectedIndex_to = document.getElementById("outputUnits").selectedIndex;

        let unit_from = getUnit(selectedIndex_from);
        let unit_to = getUnit(selectedIndex_to);

        let m = ""; //convert selected unit to meters and from m find the requested one
        let number = Number(document.getElementById('inputDistance').value);

        m = convertInputUnitToM(unit_from, number);
        let result = convertToOutputUnit(m, unit_to);

        let outputUnit = document.getElementById('outputDistance');
        outputUnit.value = result;

        function convertToOutputUnit(m, unit_to) {

            switch (unit_to) {
                case 'km':
                    return m / 1000;
                case 'm':
                    return m;
                case 'cm':
                    return m / 0.01;
                case 'mm':
                    return m / 0.001;
                case 'mi':
                    return m / 1609.34;
                case 'yrd':
                    return m / 0.9144;
                case 'ft':
                    return m / 0.3048;
                case 'in':
                    return m / 0.0254;
            }
        }

        function convertInputUnitToM(unit_from, number) {
            switch (unit_from) {
                case 'km':
                    return number * 1000;
                case 'm':
                    return number;
                case 'cm':
                    return number * 0.01;
                case 'mm':
                    return number * 0.001;
                case 'mi':
                    return number * 1609.34;
                case 'yrd':
                    return number * 0.9144;
                case 'ft':
                    return number * 0.3048;
                case 'in':
                    return number * 0.0254;
            }
        }

        function getUnit(index) {
            switch (index) {
                case 0:
                    return 'km';
                case 1:
                    return 'm';
                case 2:
                    return 'cm';
                case 3:
                    return 'mm';
                case 4:
                    return 'mi';
                case 5:
                    return 'yrd';
                case 6:
                    return 'ft';
                case 7:
                    return 'in';
            }
        }
    }
}
