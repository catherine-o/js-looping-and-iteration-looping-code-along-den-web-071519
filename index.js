function writeCards(array, event) {
    let thanks = []
    for (let i = 0; i < array.length; i++) {
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    };
    return thanks;
}


function countdown(i) {
    while (i > 0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}