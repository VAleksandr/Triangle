console.log('5.Triangle.');

let x = '';

for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
        x += '#';
    }
    console.log(x);
    x = '';
}
