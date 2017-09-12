window.onload = function(){

    increment("#wrapper");

    function increment(selector) {
        let container = $(selector);
        let textArea = $('<textarea>');
        let fragment = document.createDocumentFragment();

        let btn_increment =  $('<button>Increment</button>');
        let btn_add =  $('<button>Add</button>');
        let list = $('<ul>');
    

        textArea.val(0);
        textArea.addClass('counter');
        textArea.attr('disabled', true);

        btn_increment.addClass('btn');
        btn_increment.attr('id', 'incrementBtn');
        btn_add.addClass('btn');
        btn_add.attr('id', 'addBtn');

        list.addClass('result');

        btn_increment.click(incrementNumber);
        btn_add.click(addToList);

        textArea.appendTo(fragment);
        btn_increment.appendTo(fragment);
        btn_add.appendTo(fragment);
        list.appendTo(fragment);

        container.append(fragment);

        function incrementNumber() {
            textArea.val(+textArea.val() + 1); // + prefix so it's treated as a number
        }

        function addToList() {
            let newItem = `<li>${textArea.val()}</li>`;
            list.append(newItem);
        }
    }
}
