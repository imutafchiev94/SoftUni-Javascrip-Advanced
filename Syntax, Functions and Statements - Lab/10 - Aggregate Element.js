function solve(nums) {
    let sum = 0;
    let inverse = 0;
    let concat = '';

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        inverse += 1/nums[i]
        concat += `${nums[i]}`;
    }

    

    console.log(sum);
    console.log(inverse);
    console.log(concat);
}


