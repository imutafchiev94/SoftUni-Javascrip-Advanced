function sumFirstLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop() || 0);

    let sum = first + last;
    return sum;
}