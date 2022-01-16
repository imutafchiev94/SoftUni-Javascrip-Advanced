function rotate(arr, n) {
    for (let i = 0; i < n; i++) {
        let element = arr.pop();
        arr.unshift(element);      
    }

    console.log(arr.join(' '));
}