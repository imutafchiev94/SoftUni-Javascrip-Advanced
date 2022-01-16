function cooking(num, first, second, third, fourth, fifth) {
    let number = Number(num);

    let operators = [first, second, third, fourth, fifth];

    for (const operator of operators) {
        switch(operator) {
            case 'chop': {
                number /= 2;
                console.log(number);
                break;
            } case 'dice': {
                number = Math.sqrt(number);
                console.log(number);
                break;
            } case 'spice': {
                number++;
                console.log(number);
                break;
            } case 'bake': {
                number *= 3;
                console.log(number);
                break;
            } case 'fillet': {
                number -= number * 0.2;
                console.log(number);
                break;
            }
        }
    }
} 