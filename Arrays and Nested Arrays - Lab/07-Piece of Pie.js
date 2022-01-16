function solve(pieces, firstFlavor, secondFlavor) {
    let startIndex = pieces.indexOf(firstFlavor);
    let lastIndex = pieces.indexOf(secondFlavor) + 1;

    let searchedPie = pieces.slice(startIndex, lastIndex);
    return searchedPie;
}