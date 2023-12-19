{
    let s1 = "Sunny"; // primitive type
    let s3 = new String("Sunny"); // object type
    console.log(typeof s1); // string
    console.log(typeof s3); // object
    console.log();
}

{
    let s1 = "Sunny";
    s1.toUpperCase();
    console.log(s1); // Sunny

    console.log(s1.toUpperCase()); // SUNNY
    console.log();

    let s2 = "Sunny";
    console.log(s2[0]); // S
    for (let i = 0; i < s2.length; i++) console.log(s2[i]); // S u n n y

    s2 += " Kumar";
    console.log(s2); // Sunny Kumar
}

{
    console.log("Sunny".toUpperCase()); // SUNNY
    console.log("Sunny".toLowerCase()); // sunny
    console.log("Sunny".replace("n", "ABC")); // SuABCny
    console.log("Sunny".replaceAll("n", "ABC")); // SuABCABCy
    console.log("Sunny".charAt(0)); // S
    console.log("Sunny".length); // 5
    console.log("Sunny".substring(1, 4)); // unn
    console.log("Sunny".indexOf("n")); // 2
    console.log("Sunny".indexOf("n", 3)); // 3
    console.log("Sunny".lastIndexOf("n")); // 3
    console.log("Sunny Kumar".split(" ")); // [ 'Sunny', 'Kumar' ]
    console.log("1" + "      Sunny Kumar   ".trim()); // Sunny Kumar
    console.log("1" + "      Sunny Kumar   ".trimStart()); // 1Sunny Kumar
    console.log("1" + "      Sunny Kumar   ".trimEnd()); // 1 Sunny Kumar
    console.log("Sunny".concat("Kumar")); // SunnyKumar
    console.log("Sunny".includes("Sun")); // true
    console.log("Sunny".search("nny")); // 2
    console.log("Sunny".slice(1)); // unny
    console.log("Sunny".slice(1, 3)); // un
    console.log("Sunny".localeCompare("Sunny4")); // -1
    console.log("Sunny".padEnd(10, ".")); // Sunny.....
    console.log("Sunny".repeat(3)); // SunnySunnySunny
    console.log("Sunny".startsWith("Sun")); // true
    console.log("Sunny".endsWith("Sun")); // false
    console.log("Sunny".valueOf()); // Sunny
    console.log("521".toString()); // 521
    console.log("Sunny".match("un*")); // [ 'unn', index: 1, input: 'Sunny', groups: undefined ]
    console.log();
    console.log();
    console.log();
    console.log();
}

{
    // escape sequence
    console.log('Ram\'s "sd" Brother'); // Ram's "sd" Brother  

    // template literal
    let s1 = `Sunny
Kumar
Baranwal`;
    console.log(s1); // Sunny \n Kumar \n Baranwal
    console.log();

    let myName = "Sunny";
    console.log(`Hello ${myName}, good morning`); // Hello Sunny, good morning
    console.log();
}
