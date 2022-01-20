function solve(input) {
    let towns = {};

    for (const town of input) {
        let [ name, population ] = town.split(' <-> ');
        if(Object.keys(towns).includes(name)) {
            towns[name] += Number(population);
        } else {
            towns[name] = Number(population)
        }
    }

    for (const key in towns) {
            console.log(`${key} : ${towns[key]}`);
        }
}