function solve(num1, num2) {
    console.log(gcd(num1, num2));

    function gcd(num1, num2) {
        if(num2 == 0) {
            return num1;
        }
    
        return gcd(num2, num1 % num2);
    }
}

