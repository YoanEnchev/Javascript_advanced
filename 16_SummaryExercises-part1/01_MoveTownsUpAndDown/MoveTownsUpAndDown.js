function move(direction) {

    let selectedTown = $('#towns option:selected');

    if (direction === -1) {
        let before = selectedTown.prev();
        selectedTown.insertBefore(before);
    }

    else if (direction === 1) {
        let after = selectedTown.next();
        selectedTown.insertAfter(after);
    }
}