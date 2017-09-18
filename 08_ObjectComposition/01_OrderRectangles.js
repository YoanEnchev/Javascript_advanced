let input = [[10, 5], [15, 12]];

convertToRectangle(input);

function convertToRectangle(input) {
    let allRectangles = [];

    for (rect of input) {
        let newRect = {
            width: rect[0],
            height: rect[1],
            area: rect[0] * rect[1]
        };

        allRectangles.push(newRect);
    }

    allRectangles = allRectangles
        .sort((a, b) => a.width - b.width) //second criteria
        .sort((a, b) => a.area - b.area) // main criteria

    console.log(allRectangles);
}