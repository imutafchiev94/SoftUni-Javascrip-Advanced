function solve(arr) {
    let columnSums = [];
    let rowSums = [];
    rowSums.length = arr.length;
    rowSums.fill(0, 0, arr.length);
    columnSums.length = arr.length;
    columnSums.fill(0, 0, arr.length);
    for (let rows = 0; rows < arr.length; rows++) {
        for (let cols = 0; cols < arr[rows].length; cols++) {
         rowSums[rows] += arr[rows][cols];
         columnSums[cols] += arr[rows][cols];     
        }
        
    }
    

    let rowSum = rowSums[0];
    let colSum = columnSums[0];

    if(rowSum !== colSum) {
        return false;
    }

    let isRowSumsSame = rowSums.some((x => x !== rowSum));
    let isColSumsSame = columnSums.some((x => x !== colSum));
    
    if(!isRowSumsSame && !isColSumsSame)
    {
        return true;
    } else {
        return false;
    }
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
   ));