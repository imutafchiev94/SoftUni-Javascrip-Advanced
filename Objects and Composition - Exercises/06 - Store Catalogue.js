function solve(input) {
    let products = {};
    let sortedProducts = {};
    for (const info of input) {
        let [name, price] = info.split(' : ');

        products[name] = Number(price);
    }

    let keys = Object.keys(products).sort((a, b) => a.localeCompare(b));

    keys.forEach(x => {
        if(Object.keys(sortedProducts).includes(x[0])) {
            sortedProducts[x[0]][x] = products[x];
        } else {
            sortedProducts[x[0]] = {};
            sortedProducts[x[0]][x] = products[x];
        }
    })

    let letters = Object.keys(sortedProducts);
    letters.forEach(x => {
        console.log(x);
        for (const key in sortedProducts[x]) {
           console.log(`  ${key}: ${sortedProducts[x][key]}`);
        }
    })
}