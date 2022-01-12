function solve(radius) {
    if(typeof(radius) != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    } else {
        let area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(2));
    }
}

