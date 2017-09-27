class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this.regex = regex;
        this._elements = $(selector);
        this.value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.oninput();
    }

    oninput() {
        this.elements.on('input', (event) => {
            let text = $(event.target).val();
            this.value = text;
        })
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;

        for (let elem of this.elements) {
            $(elem).val(value);
        }
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () { console.log(textbox.value); });
