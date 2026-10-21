function intervalNumber(startNumber, endNumber) {
    let current = startNumber;

    let timer = setInterval(() => {
        console.log(current);
        current++;

        if (current > endNumber) {
            clearInterval(timer);
        }
    }, 1000);

}

intervalNumber(0, 10);