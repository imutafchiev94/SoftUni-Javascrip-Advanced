function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let arrLength = arr.length;
    let middleIndex = Math.floor(arrLength / 2);

    let biggerHalf = sortedArr.slice(middleIndex);

    return biggerHalf;
}