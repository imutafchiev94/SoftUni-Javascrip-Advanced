function solve(year, month, day) {
    let date = new Date(year, month - 1, day - 1);

    let searchedYear = date.getFullYear();
    let searchedMonth = date.getMonth();
    let searchedDay = date.getDate();

    console.log(`${searchedYear}-${searchedMonth + 1}-${searchedDay}`);
}

solve(2016, 10, 1);
solve(2016, 9, 30);