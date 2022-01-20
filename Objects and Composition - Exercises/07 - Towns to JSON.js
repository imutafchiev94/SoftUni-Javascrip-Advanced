function solve(input) {
    let towns = [];
    input.forEach((x, index )=> {
        if(index > 0) {
            let [name, lat, long] = x.split(' | ');
            lat = Number(lat).toFixed(2);
            long = Number(long.split(' |')[0]).toFixed(2);
            let town = {
                Town: name.slice(2),
                Latitude: Number(lat),
                Longitude: Number(long),
            }

            towns.push(town);
        }
    })

    return JSON.stringify(towns);
}
