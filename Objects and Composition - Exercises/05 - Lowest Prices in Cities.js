function solve(input) {
    let lowestPriceProducts = [];
    for (const town of input) {
        let [name, product, price] = town.split(' | ')

        if(Object.keys(lowestPriceProducts).includes(product)) {
            if(lowestPriceProducts[product].price > Number(price)) {
                lowestPriceProducts[product].price = Number(price);
                lowestPriceProducts[product].town = name;
            }
        } else {
            lowestPriceProducts[product] = {
                town: name,
                price: price
            }
    }
}
    let products = Object.keys(lowestPriceProducts);

    products.forEach(x => {
        console.log(`${x} -> ${lowestPriceProducts[x].price} (${lowestPriceProducts[x].town})`);
    });
}