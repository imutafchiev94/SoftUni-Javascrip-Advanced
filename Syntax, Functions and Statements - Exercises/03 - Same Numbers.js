function solve(num) {
    let str = num.toString().split('');
    let sum = 0;
    let symbol = str[0];
    let isEqual = true;

    for (let i = 0; i < str.length; i++) {
        if(symbol != str[i]) {
            isEqual = false;
        }
        sum += Number(str[i]);
    }

    console.log(isEqual);
    console.log(sum);
}

solve(1234);