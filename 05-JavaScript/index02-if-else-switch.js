{
    // if, if-else, if-else if-else ladder
    if (5 == "5") console.log("PQR"); // PQR

    if (5 == "3") console.log("ABCD");
    else console.log("XYZ"); // XYZ

    if (5 == "3") console.log("ABCD");
    else if (5 == "5") console.log("ABCD"); // ABCD
    else console.log("XYZ");

    let x = 10;
    if (x == 20) {
        x++;
        console.log(x);
    } else {
        x--;
        console.log(x); // 9
    }
}

{
    // switch case
    let num = 2;
    switch (num) {
        case 1:
            console.log(num);
            break;
        case 2:
            console.log(num + 10); // 12
            break;

        default:
            console.log(0);
            break;
    }
}
