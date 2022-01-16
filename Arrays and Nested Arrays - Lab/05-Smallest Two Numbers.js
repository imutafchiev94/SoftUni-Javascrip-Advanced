function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let smallestNums = sortedArr.slice(0, 2);
    console.log(smallestNums.join(' '));
}