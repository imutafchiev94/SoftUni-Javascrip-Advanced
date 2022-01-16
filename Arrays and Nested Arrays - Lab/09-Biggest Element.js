function biggestElement(arr) {
    let maxElement = Number.MIN_VALUE;

    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[row].length; column++) {
            if(arr[row][column] > maxElement) {
                maxElement = arr[row][column];
            }
        }
        
    }

    return maxElement;
}