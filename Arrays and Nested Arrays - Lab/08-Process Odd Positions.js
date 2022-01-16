function solve(arr) {
    let newArr = [];
    arr.map((x, index) => {
        if(index % 2 != 0) {
            newArr.push(x * 2);
        }
    });

    newArr.reverse();
    return newArr.join(' ');
}