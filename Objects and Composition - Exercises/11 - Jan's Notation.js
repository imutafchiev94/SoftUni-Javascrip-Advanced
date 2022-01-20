function solve(input) {
    let obj = {
        nums: [],
        operators: []
    };

    for (const item of input) {
        if(typeof item == 'number') {
            obj.nums.push(item);
        } else {
            obj.operators.push(item);
        }
    }

    if(obj.nums.length - obj.operators.length < 1) {
        return 'Error: not enough operands!';
    }

    if(obj.nums.length - obj.operators.length > 1) {
        return 'Error: too many operands!';
    }

    for (const operator of obj.operators) {
        let num1 = obj.nums.pop();
        let num2 = obj.nums.pop();

        switch(operator) {
            case '+': {
                let result = num2 + num1;
                obj.nums.push(result);
                break;
            } case '-': {
                let result = num2 - num1;
                obj.nums.push(result);
                break;
            } case '*': {
                let result = num2 * num1;
                obj.nums.push(result);
                break;
            } case '/': {
                let result = num2 / num1;
                obj.nums.push(result);
                break;
            }
        }
    }

    return Math.ceil(obj.nums.pop().toFixed(2));
}