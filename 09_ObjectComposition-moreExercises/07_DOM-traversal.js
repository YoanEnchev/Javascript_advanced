let element = '#content'

highlight(element);

function highlight(element) {
    let $target = $(element).children(),
        $next = $target;

    while ($next.length) {
        $target = $next;
        $next = $next.children();
    }

    $target.addClass('highlight');
    hightlightParent(element);

    function hightlightParent(element) {
        $target = $target.parent();
        $target.addClass('highlight');

        if (!$target.is($(element))) {
            hightlightParent(element);
        }
    }
}
