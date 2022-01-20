function heroFactory(input) {
    let heroes = [];
    for (const heroToAdd of input) {
        let [name, level, items] = heroToAdd.split(' / ');

        let hero = {
            name,
            level : Number(level),
            items: items ? items.split(', ') : []
        }

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}