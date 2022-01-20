function factory(library, orders) {
    let products = [];
    for (const kvp of orders) {
        let product = kvp.template;
        for (const part of kvp.parts) {
            product[part] = library[part];
        }

        products.push(product);
    }

    return products;
}