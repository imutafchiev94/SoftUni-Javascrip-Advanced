function solve(input) {
    let arr = [];

    input.sort((a, b) => a - b);

    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        arr.push(input.shift());
        arr.push(input.pop());
    }

    return arr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);