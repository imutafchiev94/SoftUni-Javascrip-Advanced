function words(str) {
    let regex = /\W+/
    let words = str.split(regex);
    let uppercaseWords = [];
    for (const word of words) {
        if(word)
        {
            uppercaseWords.push(word.toUpperCase());
        }
    }
    console.log(uppercaseWords.join(', '));
}