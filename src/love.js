let x, y, a, str;

for (y = 1.5; y > -1.5; y -= 0.1) {
    str = '';

    for (x = -1.5; x < 1.5; x += 0.05) {
        a = x * x + y * y - 1;
        str += (a * a * a - x * x * y * y * y < 0.0 ? '*' : ' ');
    }

    console.log(str);
}