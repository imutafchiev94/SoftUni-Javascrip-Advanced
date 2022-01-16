function solve(input) {
    let arr = [];

    input.reduce((acc, curr) => {
        if(curr >= acc) {
            arr.push(curr);
        }
        return arr[arr.length - 1];
    } , 0)

    return arr
}