function solve(arr) {
    let evenPositionArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            evenPositionArr.push(arr[i]);
        }
    }

    console.log(evenPositionArr.join(' '));
}
