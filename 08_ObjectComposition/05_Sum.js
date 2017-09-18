function getModule() {

    let input_1, input_2, result;

    function init(select_1, select_2, calculation) {
        input_1 = $(select_1);
        input_2 = $(select_2);
        result = $(calculation);
    }

    function add() {
        result.val(Number(input_1.val()) + Number(input_2.val()));
    }

    function subtract() {
        result.val(Number(input_1.val()) - Number(input_2.val()));
    }

    return {init, add, subtract};
}