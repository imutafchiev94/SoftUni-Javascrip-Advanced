function solve(n, k) {
    let sequence = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        if(sequence.length < k) {
            for (let j = 0; j < sequence.length; j++) {
                sum += sequence[i - j];
            }
        } else {
            for (let j = 0; j < k; j++) {
                sum += sequence[i - j];
            }
        } 
        sequence.push(sum);    
    }

    return sequence;
}
