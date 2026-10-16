
export function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

export function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
