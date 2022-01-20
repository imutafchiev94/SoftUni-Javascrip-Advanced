function calories(input) {
    let products = {};

    for (let i = 0; i < input.length; i += 2) {
        products[input[i]] = Number(input[i + 1]);
    }

    console.log(products);
}