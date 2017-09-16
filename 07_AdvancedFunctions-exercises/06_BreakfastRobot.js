((instruction) => {
    let stockedIngredients = new Map();

    stockedIngredients.set('protein', 0);
    stockedIngredients.set('carbohydrate', 0);
    stockedIngredients.set('fat', 0);
    stockedIngredients.set('flavour', 0)

    function manager(instruction) {
        let tokens = instruction.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'restock':
                let ingredient = tokens[1];
                let addQuantity = Number(tokens[2]);
                let quantityTillNow = stockedIngredients.get(ingredient);

                stockedIngredients.set(ingredient, quantityTillNow + addQuantity);
                printSuccess();
                break;
            case 'prepare':
                let food = tokens[1];
                let quantity = Number(tokens[2]);

                let protein = 0;
                let carb = 0;
                let fat = 0;
                let flavour = 0;

                if (food === 'Apple') {
                    carb = 1;
                    flavour = 2;
                }

                else if (food === 'coke') {
                    carb = 10;
                    flavour = 20;
                }

                else if (food === 'burger') {
                    carb = 5;
                    fat = 7;
                    flavour = 3;
                }

                else if (food === 'omelet') {
                    protein = 5;
                    fat = 1;
                    flavour = 1;
                }

                else if (food === 'cheverme') {
                    protein = 10;
                    carb = 10;
                    fat = 10;
                    flavour = 10;
                }

                protein *= quantity;
                carb *= quantity;
                fat *= quantity;
                flavour *= quantity;

                let proteinStocked = stockedIngredients.get('protein');
                let carbStocked = stockedIngredients.get('carbohydrate');
                let fatStocked = stockedIngredients.get('fat');
                let flavourStocked = stockedIngredients.get('flavour');

                if (proteinStocked < protein) {
                    lackOfEngridient('protein'); //prints error
                }

                else if (carbStocked < carb) {
                    lackOfEngridient('carbohydrate');
                }

                else if (fatStocked < fat) {
                    lackOfEngridient('fat');
                }

                else if (flavourStocked < flavour) {
                    lackOfEngridient('flavour');
                }

                else {
                    printSuccess();
                    substactEngridients(food);
                }
                break;

            case 'report':
                printStockedIngridients();
                break;
        }

        function printStockedIngridients() {
            let result = "";

            for ([ingridient, quantity] of stockedIngredients) {
                result += `${ingridient}=${quantity} `;
            }

            return result;
        }

        function lackOfEngridient(engridient) {
            return `Error: not enough ${engridient} in stock`;
        }

        function printSuccess() {
            return 'Success';
        }

        function substactEngridients(foodToPrepare) {
            switch (foodToPrepare) {
                case 'Apple':
                    stockedIngredients['carbohydrate'] -= 1;
                    stockedIngredients['flavour'] -= 2;
                    break;
                case 'Coke':
                    stockedIngredients['carbohydrate'] -= 10;
                    stockedIngredients['flavour'] -= 20;
                    break;
                case 'Burger':
                    stockedIngredients['carbohydrate'] -= 5;
                    stockedIngredients['fat'] -= 7;
                    stockedIngredients['flavour'] -= 3;
                    break;
                case 'Omelet':
                    stockedIngredients['protein'] -= 5;
                    stockedIngredients['fat'] -= 1;
                    stockedIngredients['flavour'] -= 1;
                    break;
                case 'Cheverme':
                    stockedIngredients['protein'] -= 10;
                    stockedIngredients['carbohydrate'] -= 10;
                    stockedIngredients['fat'] -= 10;
                    stockedIngredients['flavour'] -= 10;
                    break;
            }
        }
    }
})();